import MeetingDetail from "@/components/MeetingDetail";
import DeleteMeetingButton from "../../../components/DeleteMeetingButton";
import { SacramentMeeting } from "@/lib/types";
import { getMeetingById } from "@/lib/meetings-db";

export default async function MeetingDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const base = process.env.BASE_URL || "http://localhost:3000";

   // Prevent DB calls for non-numeric IDs
  const numericId = Number(id);
  if (isNaN(numericId)) {
    return (
      <div className="p-6">
        Invalid meeting ID: "{id}".  
        <a href="/meetings/create" className="text-blue-600 underline">
          Create a new meeting instead
        </a>.
      </div>
    );
  }

  const meeting = await getMeetingById(numericId);

  if (!meeting) {
    return <div className="p-6">Meeting not found.</div>;
  }

  return <MeetingDetail meeting={meeting} />;
}
