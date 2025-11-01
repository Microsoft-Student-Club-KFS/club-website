import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
  try {
    const achievements = await db.achievement.findMany({ 
      orderBy: { date: "desc" } 
    });
    return NextResponse.json(achievements);
  } catch (error) {
    console.error('Error fetching achievements:', error);
    return NextResponse.json(
      { error: 'Failed to fetch achievements' },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const achievement = await db.achievement.create({ 
      data: {
        title: body.title,
        description: body.description,
        date: new Date(body.date),
        image: body.image || null,
      }
    });
    return NextResponse.json(achievement, { status: 201 });
  } catch (error) {
    console.error('Error creating achievement:', error);
    return NextResponse.json(
      { error: 'Failed to create achievement' },
      { status: 500 }
    );
  }
}
