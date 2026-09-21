import Link from "next/link";

export default function HeaderNav() {
  return (
      <nav className="mt-4 flex gap-4 font-[var(--font-dynapuff)] text-lg text-white">
      <Link href="/" className="hover:underline">Home</Link>
      <Link href="/meetings" className="hover:underline">Meetings</Link>
      <Link href="/about" className="hover:underline">About</Link>
    </nav>
  );
}
