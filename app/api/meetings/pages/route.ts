import { getMeetingsTotalPages } from "@/lib/meetings-db";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query") ?? "";

  const totalPages = await getMeetingsTotalPages(query);

  return Response.json(totalPages, { status: 200 });
}
