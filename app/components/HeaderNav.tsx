'use client';

import Link from "next/link";
import { logoutAction } from '@/app/actions/logout';
import type { Session } from "next-auth";

type HeaderNavProps = {
  session?: Session | null;
};

export default function HeaderNav({ session }: HeaderNavProps) {
  return (
    <nav className="mt-4 flex gap-4 font-[var(--font-dynapuff)] text-lg text-black
    ">
      <Link href="/" className="hover:underline">Home</Link>
      <Link href="/meetings" className="hover:underline">Meetings</Link>

      {session?.user ? (
        <>
          <span>Welcome, {session.user.name}</span>

          <form action={logoutAction}>
            <button className="hover:underline text-red-300">
              Logout
            </button>
          </form>
        </>
      ) : (
        <Link href="/login" className="hover:underline">Login</Link>
      )}
    </nav>
  );
}
