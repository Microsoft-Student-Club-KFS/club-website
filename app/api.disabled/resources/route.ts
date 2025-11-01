import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
  try {
    const resources = await db.resource.findMany({ 
      orderBy: { createdAt: "desc" } 
    });
    return NextResponse.json(resources);
  } catch (error) {
    console.error('Error fetching resources:', error);
    return NextResponse.json(
      { error: 'Failed to fetch resources' },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const resource = await db.resource.create({ 
      data: {
        title: body.title,
        category: body.category,
        difficulty: body.difficulty,
        duration: body.duration,
        link: body.link,
        thumbnail: body.thumbnail || null,
      }
    });
    return NextResponse.json(resource, { status: 201 });
  } catch (error) {
    console.error('Error creating resource:', error);
    return NextResponse.json(
      { error: 'Failed to create resource' },
      { status: 500 }
    );
  }
}
