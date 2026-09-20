export const dynamic = "force-dynamic";
export const runtime = "nodejs";

import MeetingCard from "@/components/MeetingCard";
import { SacramentMeeting } from "@/lib/types";

export default async function MeetingsPage() {
  try {
    const base =
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

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
  } catch (err: any) {
    return (
      <div className="p-6 text-red-600">
        <h1 className="text-xl font-bold">Meetings failed to load</h1>
        <p>{String(err.message)}</p>
      </div>
    );
  }
}
