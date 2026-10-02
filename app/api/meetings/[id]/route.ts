import { getMeetingById } from "@/lib/meetings-db";

export const runtime = "nodejs";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const numericId = Number(id);

  if (isNaN(numericId) || numericId <= 0) {
    return Response.json({ error: "Invalid meeting id" }, { status: 400 });
  }

  const meeting = await getMeetingById(numericId);

  if (!meeting) {
    return Response.json({ error: "Meeting not found" }, { status: 404 });
  }

  return Response.json(meeting, { status: 200 });
}
