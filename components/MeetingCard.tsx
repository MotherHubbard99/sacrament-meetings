import Link from "next/link";
import { SacramentMeeting } from "@/lib/types";

export default function MeetingCard({ meeting }: { meeting: SacramentMeeting }) {
  return (
    <Link
      href={`/meetings/${meeting.id}`}
      className="block rounded-xl bg-white shadow-md p-4 border border-gray-200 hover:shadow-lg transition-shadow"
    >
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-[var(--font-dynapuff)] text-gray-800">
          {meeting.date}
        </h2>
        <span className="px-2 py-1 text-sm rounded bg-blue-100 text-blue-700">
          {meeting.meetingType}
        </span>
      </div>

      <p className="text-gray-700">
        <span className="font-semibold">Presiding:</span> {meeting.presiding}
      </p>
      <p className="text-gray-700">
        <span className="font-semibold">Conducting:</span> {meeting.conducting}
      </p>

      {meeting.speakers && meeting.speakers.length > 0 && (
        <div className="mt-3">
          <h3 className="font-semibold text-gray-800 mb-1">Speakers</h3>
          <ul className="list-disc list-inside text-gray-700">
            {meeting.speakers.map((speaker, idx) => (
              <li key={idx}>
                {speaker.name} — {speaker.topic}
              </li>
            ))}
          </ul>
        </div>
      )}
    </Link>
  );
}
