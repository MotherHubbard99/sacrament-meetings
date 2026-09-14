import MeetingCard from "@/components/MeetingCard";
import { SacramentMeeting } from "@/lib/types";

export default async function MeetingsPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/meetings`, {
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
