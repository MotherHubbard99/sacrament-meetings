import { SacramentMeeting } from "@/lib/types";

export default function MeetingDetail({ meeting }: { meeting: SacramentMeeting }) {
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

      {meeting.announcements && meeting.announcements.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Announcements</h2>
          <ul className="list-disc list-inside">
            {meeting.announcements.map((a, idx) => (
              <li key={idx}>{a}</li>
            ))}
          </ul>
        </section>
      )}

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Opening</h2>
        <p><span className="font-semibold">Opening Hymn:</span> {meeting.openingHymn.number} — {meeting.openingHymn.title}</p>
        <p><span className="font-semibold">Opening Prayer:</span> {meeting.openingPrayer}</p>
      </section>

      {meeting.wardBusiness && meeting.wardBusiness.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Ward Business</h2>
          <ul className="list-disc list-inside">
            {meeting.wardBusiness.map((item, idx) => (
              <li key={idx}>{item.description}</li>
            ))}
          </ul>
        </section>
      )}

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Sacrament</h2>
        <p><span className="font-semibold">Sacrament Hymn:</span> {meeting.sacramentHymn.number} — {meeting.sacramentHymn.title}</p>
      </section>

      {meeting.speakers && meeting.speakers.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Speakers</h2>
          <ul className="list-disc list-inside">
            {meeting.speakers.map((speaker, idx) => (
              <li key={idx}>
                <span className="font-semibold">{speaker.name}</span>
                {speaker.topic && ` — ${speaker.topic}`}
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Closing</h2>
        <p><span className="font-semibold">Closing Hymn:</span> {meeting.closingHymn.number} — {meeting.closingHymn.title}</p>
        <p><span className="font-semibold">Closing Prayer:</span> {meeting.closingPrayer}</p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Stake Business</h2>
        <p>{meeting.stakeBusiness ? "Yes" : "No"}</p>
      </section>
    </div>
  );
}
