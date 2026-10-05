'use client';

import { useActionState } from 'react';
import { createMeeting } from '@/lib/actions';


// Initial state for the create meeting form
const initialState = {
  message: '',
  errors: {},
};

export default function CreateMeetingPage() {
  const [state, formAction, isPending] = useActionState(createMeeting, initialState);

  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Create New Meeting</h1>

      {/* The form now uses formAction instead of action={createMeeting} */}
      <form action={formAction} noValidate className="space-y-6">

        {/* Date */}
        <div>
          <label htmlFor="date" className="block font-medium">Date</label>
          <input
            id="date"
            type="date"
            name="date"
            className="border p-2 w-full"
            aria-describedby="date-error"
          />
          <p id="date-error" aria-live="polite" className="text-red-600 text-sm">
            {state.errors?.date?.join(', ')}
          </p>
        </div>

        {/* Meeting Type */}
        <div>
          <label htmlFor="meetingType" className="block font-medium">Meeting Type</label>
          <input
            id="meetingType"
            type="text"
            name="meetingType"
            placeholder="testimony, regular, stake, general"
            className="border p-2 w-full"
            aria-describedby="meetingType-error"
          />
          <p id="meetingType-error" aria-live="polite" className="text-red-600 text-sm">
            {state.errors?.meetingType?.join(', ')}
          </p>
        </div>

        {/* Presiding */}
        <div>
          <label htmlFor="presiding" className="block font-medium">Presiding</label>
          <input
            id="presiding"
            type="text"
            name="presiding"
            className="border p-2 w-full"
            aria-describedby="presiding-error"
          />
          <p id="presiding-error" aria-live="polite" className="text-red-600 text-sm">
            {state.errors?.presiding?.join(', ')}
          </p>
        </div>

        {/* Conducting */}
        <div>
          <label htmlFor="conducting" className="block font-medium">Conducting</label>
          <input
            id="conducting"
            type="text"
            name="conducting"
            className="border p-2 w-full"
            aria-describedby="conducting-error"
          />
          <p id="conducting-error" aria-live="polite" className="text-red-600 text-sm">
            {state.errors?.conducting?.join(', ')}
          </p>
        </div>

        {/* Announcements */}
        <div>
          <label htmlFor="announcements" className="block font-medium">Announcements</label>
          <textarea
            id="announcements"
            name="announcements"
            className="border p-2 w-full"
            aria-describedby="announcements-error"
          />
          <p id="announcements-error" aria-live="polite" className="text-red-600 text-sm">
            {state.errors?.announcements?.join(', ')}
          </p>
        </div>

        {/* Opening Hymn */}
        <div>
          <label htmlFor="openingHymn" className="block font-medium">Opening Hymn</label>
          <input
            id="openingHymn"
            type="text"
            name="openingHymn"
            className="border p-2 w-full"
            aria-describedby="openingHymn-error"
          />
          <p id="openingHymn-error" aria-live="polite" className="text-red-600 text-sm">
            {state.errors?.openingHymn?.join(', ')}
          </p>
        </div>

        {/* Opening Prayer */}
        <div>
          <label htmlFor="openingPrayer" className="block font-medium">Opening Prayer</label>
          <input
            id="openingPrayer"
            type="text"
            name="openingPrayer"
            className="border p-2 w-full"
            aria-describedby="openingPrayer-error"
          />
          <p id="openingPrayer-error" aria-live="polite" className="text-red-600 text-sm">
            {state.errors?.openingPrayer?.join(', ')}
          </p>
        </div>

        {/* Ward Business */}
        <div>
          <label htmlFor="wardBusiness" className="block font-medium">Ward Business</label>
          <textarea
            id="wardBusiness"
            name="wardBusiness"
            className="border p-2 w-full"
            aria-describedby="wardBusiness-error"
          />
          <p id="wardBusiness-error" aria-live="polite" className="text-red-600 text-sm">
            {state.errors?.wardBusiness?.join(', ')}
          </p>
        </div>

        {/* Stake Business */}
        <div>
          <label htmlFor="stakeBusiness" className="block font-medium">Stake Business</label>
          <textarea
            id="stakeBusiness"
            name="stakeBusiness"
            className="border p-2 w-full"
            aria-describedby="stakeBusiness-error"
          />
          <p id="stakeBusiness-error" aria-live="polite" className="text-red-600 text-sm">
            {state.errors?.stakeBusiness?.join(', ')}
          </p>
        </div>

        {/* Sacrament Hymn */}
        <div>
          <label htmlFor="sacramentHymn" className="block font-medium">Sacrament Hymn</label>
          <input
            id="sacramentHymn"
            type="text"
            name="sacramentHymn"
            className="border p-2 w-full"
            aria-describedby="sacramentHymn-error"
          />
          <p id="sacramentHymn-error" aria-live="polite" className="text-red-600 text-sm">
            {state.errors?.sacramentHymn?.join(', ')}
          </p>
        </div>

        {/* Speakers */}
        <div>
          <label htmlFor="speakers" className="block font-medium">Speakers</label>
          <textarea
            id="speakers"
            name="speakers"
            placeholder="List speakers separated by commas"
            className="border p-2 w-full"
            aria-describedby="speakers-error"
          />
          <p id="speakers-error" aria-live="polite" className="text-red-600 text-sm">
            {state.errors?.speakers?.join(', ')}
          </p>
        </div>

        {/* Closing Hymn */}
        <div>
          <label htmlFor="closingHymn" className="block font-medium">Closing Hymn</label>
          <input
            id="closingHymn"
            type="text"
            name="closingHymn"
            className="border p-2 w-full"
            aria-describedby="closingHymn-error"
          />
          <p id="closingHymn-error" aria-live="polite" className="text-red-600 text-sm">
            {state.errors?.closingHymn?.join(', ')}
          </p>
        </div>

        {/* Closing Prayer */}
        <div>
          <label htmlFor="closingPrayer" className="block font-medium">Closing Prayer</label>
          <input
            id="closingPrayer"
            type="text"
            name="closingPrayer"
            className="border p-2 w-full"
            aria-describedby="closingPrayer-error"
          />
          <p id="closingPrayer-error" aria-live="polite" className="text-red-600 text-sm">
            {state.errors?.closingPrayer?.join(', ')}
          </p>
        </div>

        {/* Global message */}
        {state.message && (
          <p aria-live="polite" className="text-red-600 text-sm">
            {state.message}
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={isPending}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {isPending ? 'Saving…' : 'Create Meeting'}
        </button>
      </form>
    </div>
  );
}