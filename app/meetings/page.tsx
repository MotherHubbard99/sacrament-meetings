export const dynamic = "force-dynamic";
export const runtime = "nodejs";

import MeetingCard from "@/components/MeetingCard";
import { SacramentMeeting } from "@/lib/types";

export default async function MeetingsPage() {
  const base = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const res = await fetch(`${base}/api/meetings`, {
    method: "GET",
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`API returned ${res.status}`);
  }

  const meetings: SacramentMeeting[] = await res.json();

  return (
    <div className="space-y-4">
      {meetings.map((m) => (
        <MeetingCard key={m.id} meeting={m} />
      ))}
    </div>
  );
}
