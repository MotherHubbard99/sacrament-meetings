import { getMeetings } from "@/lib/meetings-db";

export async function GET(request: Request) {
  // Read ?date=YYYY-MM-DD from the query string
  const { searchParams } = new URL(request.url);
  const date = searchParams.get("date"); // "2026-05-03" or null
  // Pass date or null directly to your DB helper
  const meetings = await getMeetings(date);

  return Response.json(meetings);
}
