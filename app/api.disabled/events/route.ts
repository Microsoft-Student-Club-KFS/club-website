import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
  try {
    const events = await db.event.findMany({ 
      orderBy: { date: "desc" } 
    });
    return NextResponse.json(events);
  } catch (error) {
    console.error('Error fetching events:', error);
    return NextResponse.json(
      { error: 'Failed to fetch events' },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const event = await db.event.create({ 
      data: {
        title: body.title,
        description: body.description,
        type: body.type,
        date: new Date(body.date),
        location: body.location,
        image: body.image || null,
      }
    });
    return NextResponse.json(event, { status: 201 });
  } catch (error) {
    console.error('Error creating event:', error);
    return NextResponse.json(
      { error: 'Failed to create event' },
      { status: 500 }
    );
  }
}
