import { NextRequest } from "next/server";
import { getMeetingById } from "@/lib/meetings-db";

export async function GET(
  req: NextRequest,
  // The params object is a promise that resolves to an object containing the id parameter
  //added this because vercel was throwing an error about the params object not being a promise
  { params }: { params: Promise<{ id: string }> }
) {
  // Extract the id from the params
  const { id } = await params;

  const numericId = Number(id);

  if (isNaN(numericId) || numericId <= 0) {
    return Response.json(
      { error: "Invalid meeting id" },
      { status: 400 }
    );
  }

  const meeting = await getMeetingById(numericId);

  if (!meeting) {
    return Response.json(
      { error: "Meeting not found" },
      { status: 404 }
    );
  }

  return Response.json(meeting, { status: 200 });
}
