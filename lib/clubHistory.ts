// Centralized club history milestones.
// Source: Internal club knowledge + public Facebook page (login required for raw scrape, so curated manually).
// To update: adjust items below or extend with new achievements.

export interface ClubMilestone {
  year: string;          // Display year
  date?: string;         // Optional ISO date for ordering
  title: string;         // Short headline
  description: string;   // Longer descriptive text
  color: string;         // Base color brand accent
  gradient: string;      // Background gradient
  position: 'left' | 'right'; // Layout side
  icon: string;          // Fluent UI icon name string for mapping in UI
}

// Ordered chronologically (oldest first). If date present, we can sort by date.
export const clubTimeline: ClubMilestone[] = [
  {
    year: '2023',
    date: '2023-09-01',
    title: 'Club Foundation',
    description: 'Microsoft Student Club (MSC) at Kafr El-Shaikh University is founded to empower students with hands-on technology experience and community support.',
    color: '#3b82f6',
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
    position: 'left',
    icon: 'Rocket24Regular'
  },
  {
    year: '2024',
    date: '2024-02-15',
    title: 'First Season Launch',
    description: 'Kickoff of the inaugural season with workshops, onboarding sessions, and community engagement initiatives.',
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)',
    position: 'right',
    icon: 'Code24Regular'
  },
  {
    year: '2024',
    date: '2024-05-10',
    title: 'Strategic Partnerships',
    description: 'Began collaborations with tech mentors and external communities to expand learning pathways and project opportunities.',
    color: '#ec4899',
    gradient: 'linear-gradient(135deg, #ec4899 0%, #f472b6 100%)',
    position: 'left',
    icon: 'People24Regular'
  },
  {
    year: '2024',
    date: '2024-07-01',
    title: 'TIP Program Start',
    description: 'Launched Technical Internship Program (TIP) offering real-world project experience and mentorship for active members.',
    color: '#06b6d4',
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #22d3ee 100%)',
    position: 'right',
    icon: 'PersonStar24Regular'
  },
  {
    year: '2025',
    date: '2025-01-20',
    title: 'Official Website Launch',
    description: 'Rolled out the MSC KFS website as a unified hub for events, resources, and club updates.',
    color: '#2563eb',
    gradient: 'linear-gradient(135deg, #2563eb 0%, #60a5fa 100%)',
    position: 'left',
    icon: 'Globe24Regular'
  },
  {
    year: '2025',
    date: '2025-06-01',
    title: 'Future Vision Roadmap',
    description: 'Planning phase for an AI research lab, startup incubator support track, and milestone goal of reaching 1000+ engaged members.',
    color: '#0ea5e9',
    gradient: 'linear-gradient(135deg, #0ea5e9 0%, #22d3ee 100%)',
    position: 'right',
    icon: 'Target24Regular'
  }
];

// Utility to get sorted items (newest first if needed)
export function getClubTimeline(limit?: number) {
  const items = [...clubTimeline].sort((a, b) => {
    if (!a.date || !b.date) return 0;
    return Date.parse(b.date) - Date.parse(a.date);
  });
  return typeof limit === 'number' ? items.slice(0, limit) : items;
}

export const clubHistoryMeta = {
  source: 'Manual curation (Facebook public page & internal records)',
  lastUpdated: '2025-11-08',
  updateInstructions: 'Edit clubTimeline in lib/clubHistory.ts; keep chronological accuracy and include ISO dates for new items.'
};
