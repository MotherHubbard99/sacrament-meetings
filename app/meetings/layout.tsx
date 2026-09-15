import { ReactNode } from "react";
import MeetingsNav from "@/components/MeetingsNav";


export default function MeetingsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-5xl mx-auto p-6">

      {/* Meetings-specific navigation */}
      <MeetingsNav />

      {/* Page content */}
      <div>{children}</div>
    </div>
  );
}
