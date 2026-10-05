import Link from "next/link";
import { SacramentMeeting } from "@/lib/types";
import DeleteMeetingButton from "@/components/DeleteMeetingButton";

export default function MeetingCard({ meeting }: { meeting: SacramentMeeting }) {
  const speakers = Array.isArray(meeting.speakers)
    ? meeting.speakers
    : typeof meeting.speakers === "string"
      ? meeting.speakers.split(",").map((speaker) => speaker.trim())
      : [];

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-md transition-shadow hover:shadow-lg">
      <Link href={`/meetings/${meeting.id}`} className="block">
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-xl font-[var(--font-dynapuff)] text-gray-800">
            {meeting.date}
          </h2>
          <span className="rounded bg-blue-100 px-2 py-1 text-sm text-blue-700">
            {meeting.meetingType}
          </span>
        </div>

        <p className="text-gray-700">
          <span className="font-semibold">Presiding:</span> {meeting.presiding}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Conducting:</span> {meeting.conducting}
        </p>

        {speakers.length > 0 && (
          <div className="mt-3">
            <h3 className="mb-1 font-semibold text-gray-800">Speakers</h3>
            <ul className="list-inside list-disc text-gray-700">
              {speakers.map((speaker, idx) => (
                <li key={idx}>{speaker}</li>
              ))}
            </ul>
          </div>
        )}
      </Link>

      <div className="mt-4 flex gap-3">
        <Link
          href={`/meetings/${meeting.id}/edit`}
          className="rounded bg-blue-600 px-3 py-2 text-white"
        >
          Edit
        </Link>

        <DeleteMeetingButton id={meeting.id} />
      </div>
    </div>
  );
}

