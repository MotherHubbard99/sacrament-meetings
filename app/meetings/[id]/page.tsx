console.log("IS SERVER?", typeof window === "undefined");


import { getMeetingById } from "@/lib/meetings-db";
import MeetingDetail from "@/components/MeetingDetail";

export default async function MeetingDetailPage({ params }: { params: { id: string } }) {
  const meeting = getMeetingById(Number(params.id));

  if (!meeting) {
    return <div className="p-6">Meeting not found.</div>;
  }

  return <MeetingDetail meeting={meeting} />;
}

