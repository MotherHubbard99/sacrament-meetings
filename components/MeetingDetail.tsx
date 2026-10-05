import type { SacramentMeeting } from "@/lib/types";

type Meeting = SacramentMeeting;

export default function MeetingDetail({ meeting }: { meeting: Meeting }) {
  // Announcements: text or text[]
  const announcements = Array.isArray(meeting.announcements)
    ? meeting.announcements
    : typeof meeting.announcements === "string"
    ? meeting.announcements.split("\n").map(a => a.trim())
    : [];

  // Speakers: jsonb or text
  const speakers = Array.isArray(meeting.speakers)
    ? meeting.speakers
    : typeof meeting.speakers === "string"
    ? meeting.speakers.split(",").map(s => ({ name: s.trim(), topic: "" }))
    : [];

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md border border-gray-200">
      <h1 className="text-3xl font-[var(--font-dynapuff)] text-gray-800 mb-4">
        Sacrament Meeting — {meeting.date}
      </h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Presiding & Conducting</h2>
        <p><span className="font-semibold">Presiding:</span> {meeting.presiding}</p>
        <p><span className="font-semibold">Conducting:</span> {meeting.conducting}</p>
      </section>

      {announcements.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Announcements</h2>
          <ul className="list-disc list-inside">
            {announcements.map((a, idx) => (
              <li key={idx}>{a}</li>
            ))}
          </ul>
        </section>
      )}

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Opening</h2>
        <p><span className="font-semibold">Opening Hymn:</span> {meeting.openingHymn}</p>
        <p><span className="font-semibold">Opening Prayer:</span> {meeting.openingPrayer}</p>
      </section>

      {meeting.wardBusiness && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Ward Business</h2>
          <p>{meeting.wardBusiness}</p>
        </section>
      )}

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Sacrament</h2>
        <p><span className="font-semibold">Sacrament Hymn:</span> {meeting.sacramentHymn}</p>
      </section>

      {speakers.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Speakers</h2>
          <ul className="list-disc list-inside">
            {speakers.map((speaker, idx) => (
              <li key={idx}>
                <span className="font-semibold">
                  {typeof speaker === "string" ? speaker : speaker.name}
                </span>
                {typeof speaker !== "string" && speaker.topic && ` — ${speaker.topic}`}
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Closing</h2>
        <p><span className="font-semibold">Closing Hymn:</span> {meeting.closingHymn}</p>
        <p><span className="font-semibold">Closing Prayer:</span> {meeting.closingPrayer}</p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Stake Business</h2>
        <p>{meeting.stakeBusiness ? "Yes" : "No"}</p>
      </section>
    </div>
  );
}
