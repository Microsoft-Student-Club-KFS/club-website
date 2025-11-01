import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
  try {
    const news = await db.news.findMany({ 
      orderBy: { date: "desc" } 
    });
    return NextResponse.json(news);
  } catch (error) {
    console.error('Error fetching news:', error);
    return NextResponse.json(
      { error: 'Failed to fetch news' },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const newsItem = await db.news.create({ 
      data: {
        title: body.title,
        content: body.content,
        date: new Date(body.date),
        image: body.image || null,
      }
    });
    return NextResponse.json(newsItem, { status: 201 });
  } catch (error) {
    console.error('Error creating news:', error);
    return NextResponse.json(
      { error: 'Failed to create news' },
      { status: 500 }
    );
  }
}
