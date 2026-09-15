console.log("IS SERVER?", typeof window === "undefined");


import { getMeetingById } from "@/lib/meetings-db";
import MeetingDetail from "@/components/MeetingDetail";

export default async function MeetingDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; // Await the params promise to get the id        
  const meeting = getMeetingById(Number(id)); // Call the function to get the meeting by id

  if (!meeting) {
    return <div className="p-6">Meeting not found.</div>;
  }

  return <MeetingDetail meeting={meeting} />;
}

