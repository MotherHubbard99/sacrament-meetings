'use client';

import { useActionState } from "react";
import { deleteMeeting } from "@/lib/actions";

const initialState = { message: "", errors: {} };

export default function DeleteMeetingButton({ id }: { id: number }) {
  const [state, formAction, isPending] = useActionState(deleteMeeting, initialState);

  return (
    <form action={formAction}>
      <input type="hidden" name="id" value={id} />

      {state.message && (
        <p aria-live="polite" className="text-red-600 text-sm">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="bg-red-600 text-white px-4 py-2 rounded"
      >
        {isPending ? "Deleting…" : "Delete Meeting"}
      </button>
    </form>
  );
}
