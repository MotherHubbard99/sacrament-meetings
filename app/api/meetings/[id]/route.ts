import { getMeetingById } from "@/lib/meetings-db";

export async function GET(
    // Read ?id=123 from the query string
  request: Request,
  { params }: { params: { id: string } }
) {
  // Convert id to number
  const id = Number(params.id);

  // Validate id
  if (isNaN(id) || id <= 0) {
    return Response.json(
      { error: "Invalid meeting id" },
      { status: 400 }
    );
  }

  // Fetch meeting
  const meeting = await getMeetingById(id);

  // Not found
  if (!meeting) {
    return Response.json(
      { error: "Meeting not found" },
      { status: 404 }
    );
  }

  // Success
  return Response.json(meeting, { status: 200 });
}
