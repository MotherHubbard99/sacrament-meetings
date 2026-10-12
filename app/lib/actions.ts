'use server';

import { neon } from '@neondatabase/serverless';
import { revalidatePath } from 'next/dist/server/web/spec-extension/revalidate';
import { redirect } from 'next/navigation';
import { MeetingFormSchema } from './meeting-schema';
import { auth } from '@/auth';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

const sql = neon(process.env.DATABASE_URL!);

//authenticate user action
export async function authenticate(prevState: string | undefined, formData: FormData) {
  const email = String(formData.get('email') ?? '');
  const password = String(formData.get('password') ?? '');

  try {
    await signIn('credentials', {
      email,
      password,
      redirect: false
    });

    return undefined;
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid email or password.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

async function requireOwnerSession() {
  const session = await auth();
  if (!session?.user) throw new Error('Not authenticated');
  return session;
}

export async function createProject(formData: FormData) {
  await requireOwnerSession();

  const title = String(formData.get('title') ?? '');
  const description = String(formData.get('description') ?? '');
  const imageUrl = String(formData.get('imageUrl') ?? '');

  await sql`
    INSERT INTO projects (title, description, image_url)
    VALUES (${title}, ${description}, ${imageUrl})
  `;

  revalidatePath('/dashboard/projects');
  redirect('/dashboard/projects');
}

export async function updateProject(id: string, formData: FormData) {
  await requireOwnerSession();

  const title = String(formData.get('title') ?? '');
  const description = String(formData.get('description') ?? '');
  const imageUrl = String(formData.get('imageUrl') ?? '');

  await sql`
    UPDATE projects
    SET title = ${title}, description = ${description}, image_url = ${imageUrl}
    WHERE id = ${id}
  `;

  revalidatePath('/dashboard/projects');
  redirect('/dashboard/projects');
}

export async function deleteProject(id: string) {
  await requireOwnerSession();

  await sql`DELETE FROM projects WHERE id = ${id}`;

  revalidatePath('/dashboard/projects');
}

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

