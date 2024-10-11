import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const songs = await prisma.song.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(songs, { status: 200 });
  } catch (error) {
    console.error("Error fetching songs:", error);
    return NextResponse.json(
      { error: "Error fetching songs" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const newSong = await request.json();

    const song = await prisma.song.create({
      data: newSong,
    });

    return NextResponse.json(song, { status: 201 });
  } catch (error) {
    console.error("Error inserting song:", error);
    return NextResponse.json(
      { error: "Error inserting song" },
      { status: 500 }
    );
  }
}
