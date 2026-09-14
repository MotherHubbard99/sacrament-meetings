"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/meetings", label: "Meetings" },
  { href: "/about", label: "About" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-4 font-[var(--font-dynapuff)] text-lg">
      {links.map((link) => {
        const isActive =
          pathname === link.href ||
          (link.href !== "/" && pathname.startsWith(link.href));

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`px-2 py-1 rounded transition-colors ${
              isActive
                ? "text-blue-700 bg-blue-100"
                : "text-gray-700 hover:text-blue-700"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
