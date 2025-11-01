import { HomeClient } from './HomeClient';

// Server Component - Static version without database
export default function Home() {
  // No database calls - pass empty array for static site
  const recentEvents: any[] = [];

  // Pass data to client component for rendering
  return <HomeClient recentEvents={recentEvents} />;
}
