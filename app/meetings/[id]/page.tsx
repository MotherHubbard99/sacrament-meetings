import MeetingDetail from "@/components/MeetingDetail";
import { SacramentMeeting } from "@/lib/types";

export default async function MeetingDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const base = process.env.BASE_URL || "http://localhost:3000";

  const res = await fetch(`${base}/api/meetings/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return <div className="p-6">Meeting not found.</div>;
  }

  const meeting: SacramentMeeting = await res.json();

  return <MeetingDetail meeting={meeting} />;
}

