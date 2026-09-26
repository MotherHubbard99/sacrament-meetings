export const dynamic = "force-dynamic";
export const runtime = "nodejs";

import MeetingCard from "@/components/MeetingCard";
import { SacramentMeeting } from "@/lib/types";
import { MeetingSearch } from "@/components/MeetingSearch";
import { Pagination } from "@/components/Pagination";

export default async function MeetingsPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string; page?: string }>;
}) {
  const { query = "", page = "1" } = await searchParams;

  const base = process.env.BASE_URL || "http://localhost:3000";

  let meetings: SacramentMeeting[] = [];
  let totalPages = 1;

  try {
    const res = await fetch(
      `${base}/api/meetings?query=${query}&page=${page}`,
      { cache: "no-store" }
    );

    if (!res.ok) throw new Error(`API returned ${res.status}`);

    meetings = await res.json();

    const pagesRes = await fetch(
      `${base}/api/meetings/pages?query=${query}`,
      { cache: "no-store" }
    );

    totalPages = await pagesRes.json();
  } catch (err: unknown) {
    return (
      <div className="p-6 text-red-600">
        <h1 className="text-xl font-bold">Meetings failed to load</h1>
        <p>{String(err)}</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <MeetingSearch />
      {meetings.map((m) => (
        <MeetingCard key={m.id} meeting={m} />
      ))}
      <Pagination totalPages={totalPages} />
    </div>
  );
}

