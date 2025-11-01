/**
 * Client-side and server-side tracking utility
 * Handles internal event tracking and analytics
 */

export interface TrackingPayload {
  [key: string]: string | number | boolean | null | undefined;
}

/**
 * Client-side: Track an event by sending it to the internal analytics API
 * @param name - Event name (e.g., 'event_registration_click', 'news_view')
 * @param payload - Additional data to track
 */
export async function trackEvent(
  name: string,
  payload: TrackingPayload = {}
): Promise<void> {
  // Don't track in development mode
  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics - Dev Mode]', name, payload);
    return;
  }

  try {
    await fetch('/api/analytics/event', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        payload,
        timestamp: new Date().toISOString(),
      }),
    });
  } catch (error) {
    console.error('Failed to track event:', error);
    // Silently fail - don't disrupt user experience
  }
}

/**
 * Server-side: Log event directly to database
 * Use this for server actions or API routes
 */
export async function trackEventServer(
  name: string,
  payload: TrackingPayload = {}
): Promise<void> {
  // Import dynamically to avoid edge runtime issues
  const { default: db } = await import('@/lib/db');
  
  try {
    await db.analyticsEvent.create({
      data: {
        name,
        payload: JSON.stringify(payload),
      },
    });
  } catch (error) {
    console.error('Failed to track event on server:', error);
  }
}

/**
 * Common event names for consistency
 */
export const EVENTS = {
  // Event-related
  EVENT_VIEW: 'event_view',
  EVENT_REGISTRATION_CLICK: 'event_registration_click',
  
  // News-related
  NEWS_VIEW: 'news_view',
  NEWS_SHARE: 'news_share',
  
  // Subscription-related
  SUBSCRIBE_SUBMIT: 'subscribe_submit',
  SUBSCRIBE_CONFIRM: 'subscribe_confirm',
  
  // Contact-related
  CONTACT_SUBMIT: 'contact_submit',
  
  // Resource-related
  RESOURCE_VIEW: 'resource_view',
  RESOURCE_DOWNLOAD: 'resource_download',
  
  // Project-related
  PROJECT_VIEW: 'project_view',
  
  // Achievement-related
  ACHIEVEMENT_VIEW: 'achievement_view',
  
  // General navigation
  PAGE_VIEW: 'page_view',
} as const;
