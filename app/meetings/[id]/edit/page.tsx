import { getMeetingById } from '@/lib/meetings-db';
import { notFound } from 'next/navigation';
import EditMeetingForm from '@/app/meetings/[id]/edit/EditMeetingForm';

export default async function EditMeetingPage({ params }: { params: { id: string } }) {
    const meetingId = Number(params.id);

  if (Number.isNaN(meetingId)) {
    notFound();
  }

  const meeting = await getMeetingById(meetingId);

  if (!meeting) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Edit Meeting</h1>
      <EditMeetingForm meeting={meeting} />
    </div>
  );
}
