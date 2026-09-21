import { ReactNode } from "react";
import MeetingsNavWrapper from "@/components/MeetingsNavWrapper";

export default function MeetingsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <MeetingsNavWrapper />
      <div>{children}</div>
    </div>
  );
}
