"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MeetingsNav() {
  const pathname = usePathname();

  const sectionLinks = [
    { href: "/meetings", label: "All Meetings" },
    { href: "/meetings/new", label: "Create Meeting" },
  ];

  return (
    <nav className="mt-6 mb-8 flex gap-4 font-[var(--font-dynapuff)] text-lg">
      {sectionLinks.map((link) => {
        const isActive =
          pathname === link.href ||
          (link.href !== "/meetings" && pathname.startsWith(link.href));

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`px-3 py-1 rounded transition-colors ${
              isActive
                ? "bg-yellow-200 text-yellow-800"
                : "text-gray-700 hover:text-yellow-800"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
