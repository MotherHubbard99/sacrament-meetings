export default function MeetingNotFound() {
  return (
    <div className="max-w-2xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">Meeting Not Found</h1>
      <p className="mb-6">The meeting you are trying to edit does not exist.</p>
      <a href="/meetings" className="text-blue-600 underline">
        Back to Meetings
      </a>
    </div>
  );
}
