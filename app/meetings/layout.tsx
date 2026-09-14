import { ReactNode } from "react";
import NavLinks from "@/components/NavLinks";
import MeetingsNav from "@/components/MeetingsNav";


export default function MeetingsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Global navigation */}
      <NavLinks />

      {/* Meetings-specific navigation */}
      <MeetingsNav />

      {/* Page content */}
      <div>{children}</div>
    </div>
  );
}
