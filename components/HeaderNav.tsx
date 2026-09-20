import Link from "next/link";

export default function HeaderNav() {
  return (
    <nav className="mt-4 flex gap-4">
      <Link href="/meetings">Meetings</Link>
      <Link href="/meetings/current">Current Meeting</Link>
    </nav>
  );
}
