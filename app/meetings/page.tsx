export const dynamic = "force-dynamic"  //prevents static generation
export const runtime = "nodejs"; //this is a server file!

import MeetingCard from "@/components/MeetingCard";
import { SacramentMeeting } from "@/lib/types";

  export default async function MeetingsPage() {
  const res = await fetch("/api/meetings", {
    method: "GET",
    cache: "no-store",
  });

  const meetings: SacramentMeeting[] = await res.json();

  return (
    <div className="space-y-4">
      {meetings.map((m) => (
        <MeetingCard key={m.id} meeting={m} />
      ))}
    </div>
  );
}