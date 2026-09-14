import { redirect } from "next/navigation";
import { getMeetings } from "@/lib/meetings-db";

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

  if (!meeting) {
    redirect("/meetings");
  }

  redirect(`/meetings/${meeting.id}`);
}

