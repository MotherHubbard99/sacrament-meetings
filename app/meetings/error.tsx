'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold text-red-600">Something went wrong</h1>
      <p>{String(error)}</p>
      <button onClick={reset} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
        Try Again
      </button>
      <a href="/meetings" className="block mt-2 text-blue-600 underline">
        Back to Meetings
      </a>
    </div>
  );
}
