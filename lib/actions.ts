'use server';

import { neon } from '@neondatabase/serverless';
import { revalidatePath } from 'next/dist/server/web/spec-extension/revalidate';
import { redirect } from 'next/navigation';
import { MeetingFormSchema } from './meeting-schema';


const sql = neon(process.env.DATABASE_URL!);


// State returned to the client form
export type MeetingFormState = {
  message?: string;
  errors?: Record<string, string[]>;
};

//DELETE MEETING ACTION
export async function deleteMeeting(
  prevState: MeetingFormState,
  formData: FormData
  ): Promise<MeetingFormState> {
  try {
    const id = formData.get('id');
    if (!id || typeof id !== 'string') {
      return { message: 'Missing meeting id.' };
    }

    await sql`DELETE FROM meetings WHERE id = ${id}`;


  } catch (err) {
    console.error('Delete meeting error:', err);
    return { message: 'Unexpected error deleting meeting. Please try again.' };
  }
    revalidatePath('/meetings');
    redirect('/meetings');
}

//CREATE MEETING ACTION
export async function createMeeting(
  prevState: MeetingFormState,
  formData: FormData
): Promise<MeetingFormState> {
  try {
    const raw = {
      date: formData.get('date'),
      meetingType: formData.get('meetingType'),
      presiding: formData.get('presiding'),
      conducting: formData.get('conducting'),
      announcements: formData.get('announcements'),
      openingHymn: formData.get('openingHymn'),
      openingPrayer: formData.get('openingPrayer'),
      wardBusiness: formData.get('wardBusiness'),
      stakeBusiness: formData.get('stakeBusiness'),
      sacramentHymn: formData.get('sacramentHymn'),
      speakers: formData.get('speakers'),
      closingHymn: formData.get('closingHymn'),
      closingPrayer: formData.get('closingPrayer'),
    };

    const result = MeetingFormSchema.safeParse(raw);
    if (!result.success) {
      return zodToState(result);
    }

    const m = result.data;

    
    await sql`
      INSERT INTO meetings (
        date,
        meeting_type,
        presiding,
        conducting,
        announcements,
        opening_hymn,
        opening_prayer,
        ward_business,
        stake_business,
        sacrament_hymn,
        speakers,
        closing_hymn,
        closing_prayer
      )
      VALUES (
        ${m.date},
        ${m.meetingType},
        ${m.presiding},
        ${m.conducting},
        ${m.announcements},
        ${m.openingHymn},
        ${m.openingPrayer},
        ${m.wardBusiness},
        ${m.stakeBusiness},
        ${m.sacramentHymn},
        ${m.speakers},
        ${m.closingHymn},
        ${m.closingPrayer}
      )
    `;

  } catch (err) {
    console.error('Create meeting error:', err);
    return { message: 'Unexpected error creating meeting. Please try again.' };
  }
    revalidatePath('/meetings');
    redirect('/meetings?created=1');
}

//UPDATE MEETING ACTION
export async function updateMeeting(
  id: string,
  prevState: MeetingFormState,
  formData: FormData
): Promise<MeetingFormState> {
  try {
    const raw = {
      date: formData.get('date'),
      meetingType: formData.get('meetingType'),
      presiding: formData.get('presiding'),
      conducting: formData.get('conducting'),
      announcements: formData.get('announcements'),
      openingHymn: formData.get('openingHymn'),
      openingPrayer: formData.get('openingPrayer'),
      wardBusiness: formData.get('wardBusiness'),
      stakeBusiness: formData.get('stakeBusiness'),
      sacramentHymn: formData.get('sacramentHymn'),
      speakers: formData.get('speakers'),
      closingHymn: formData.get('closingHymn'),
      closingPrayer: formData.get('closingPrayer'),
    };
    const result = MeetingFormSchema.safeParse(raw);
    if (!result.success) {
      return zodToState(result);
    }

    const m = result.data;

    await sql`
      UPDATE meetings SET
        date = ${m.date},
        meeting_type = ${m.meetingType},
        presiding = ${m.presiding},
        conducting = ${m.conducting},
        announcements = ${m.announcements},
        opening_hymn = ${m.openingHymn},
        opening_prayer = ${m.openingPrayer},
        ward_business = ${m.wardBusiness},
        stake_business = ${m.stakeBusiness},
        sacrament_hymn = ${m.sacramentHymn},
        speakers = ${m.speakers},
        closing_hymn = ${m.closingHymn},
        closing_prayer = ${m.closingPrayer}
      WHERE id = ${id}
    `;
  } catch (err) {
    console.error('Update meeting error:', err);
    return { message: 'Unexpected error updating meeting. Please try again.' };
  }
    revalidatePath('/meetings');
    redirect('/meetings');
}

function zodToState(
  result: ReturnType<typeof MeetingFormSchema.safeParse>
): MeetingFormState {
  if (result.success) return {};
  return {
    message: 'Please fix the errors below.',
    errors: result.error.flatten().fieldErrors,
  };
}

