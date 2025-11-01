import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';

/**
 * POST /api/analytics/event
 * Store an analytics event in the database
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, payload } = body;

    if (!name) {
      return NextResponse.json(
        { error: 'Event name is required' },
        { status: 400 }
      );
    }

    // Store the event
    const event = await db.analyticsEvent.create({
      data: {
        name,
        payload: JSON.stringify(payload || {}),
      },
    });

    return NextResponse.json({ success: true, id: event.id });
  } catch (error) {
    console.error('Analytics event error:', error);
    return NextResponse.json(
      { error: 'Failed to record event' },
      { status: 500 }
    );
  }
}

/**
 * GET /api/analytics/event
 * Retrieve analytics events (admin only - can be protected later)
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '100');
    const name = searchParams.get('name');

    const where = name ? { name } : {};

    const events = await db.analyticsEvent.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      take: limit,
    });

    // Parse payload JSON for each event
    const eventsWithParsedPayload = events.map((event) => ({
      ...event,
      payload: JSON.parse(event.payload),
    }));

    return NextResponse.json(eventsWithParsedPayload);
  } catch (error) {
    console.error('Analytics fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch events' },
      { status: 500 }
    );
  }
}
