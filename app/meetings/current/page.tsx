export const dynamic = "force-dynamic";
export const runtime = "nodejs";

import { redirect } from "next/navigation";
import { getMeetings } from "@/lib/meetings-db";
import Link from "next/link";

function getMostRecentSunday(): string {
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0 = Sunday
  const sunday = new Date(today);
  sunday.setDate(today.getDate() - dayOfWeek);
  return sunday.toISOString().split("T")[0];
}

export default async function CurrentMeetingPage() {
  const sunday = getMostRecentSunday();
  const meetings = await getMeetings();
  const meeting = meetings.find((m) => m.date === sunday);

  //If no sacrament meeting listed for the previous week, this has been added in so it doesn't crash
  if (!meeting) { 
    return (
      <div className="p-6 space-y-4">
        <h1 className="text-2xl font-bold">No Meeting Found</h1>
        <p>
          There is no sacrament meeting scheduled for the most recent Sunday
          ({sunday}). Please check the full list of meetings.
        </p>
        <Link href="/meetings"
          className="text-blue-600 underline hover:text-blue-800">
          View All Meetings
        </Link>
      </div>
    );
  }

  // If a meeting exists, redirect to its detail page
  return redirect(`/meetings/${meeting.id}`);
}
