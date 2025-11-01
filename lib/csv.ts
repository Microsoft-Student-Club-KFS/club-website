/**
 * CSV Export Utility
 */

export function generateCSV<T extends Record<string, unknown>>(
  data: T[],
  columns: Array<{ key: keyof T; label: string }>
): string {
  if (data.length === 0) {
    return '';
  }

  // Generate header row
  const headers = columns.map(col => escapeCSVValue(col.label)).join(',');
  
  // Generate data rows
  const rows = data.map(row => {
    return columns
      .map(col => {
        const value = row[col.key];
        return escapeCSVValue(formatValue(value));
      })
      .join(',');
  });

  return [headers, ...rows].join('\n');
}

function escapeCSVValue(value: string): string {
  // Escape double quotes and wrap in quotes if contains comma, quote, or newline
  if (value.includes(',') || value.includes('"') || value.includes('\n')) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}

function formatValue(value: unknown): string {
  if (value === null || value === undefined) {
    return '';
  }
  if (value instanceof Date) {
    return value.toISOString();
  }
  if (typeof value === 'object') {
    return JSON.stringify(value);
  }
  return String(value);
}

export function downloadCSV(filename: string, csvContent: string): Response {
  return new Response(csvContent, {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': `attachment; filename="${filename}"`,
    },
  });
}
