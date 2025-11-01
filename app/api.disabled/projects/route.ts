import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
  try {
    const projects = await db.project.findMany({ 
      orderBy: { year: "desc" } 
    });
    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const project = await db.project.create({ 
      data: {
        title: body.title,
        description: body.description,
        technologies: body.technologies,
        link: body.link || null,
        year: body.year,
      }
    });
    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    console.error('Error creating project:', error);
    return NextResponse.json(
      { error: 'Failed to create project' },
      { status: 500 }
    );
  }
}
