export const runtime = "nodejs"; //this is a server file!

import MeetingCard from "@/components/MeetingCard";
import { SacramentMeeting } from "@/lib/types";
import { headers } from "next/headers";

export default async function MeetingsPage() {
  //const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/meetings`, { //vercel was erroring out about this, so I changed it to the below
  const h = await headers();
const origin = h.get("host");
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";

  const res = await fetch(`${protocol}://${origin}/api/meetings`, {
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
