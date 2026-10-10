import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import bcrypt from 'bcryptjs';
import { authConfig } from './auth.config';
import { getUserByEmail } from '@/app/lib/meetings-db';

// 1️⃣ Build your full authOptions object
export const authOptions = {
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsed = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (!parsed.success) return null;

        const { email, password } = parsed.data;
        const user = await getUserByEmail(email);
        if (!user) return null;

        const passwordsMatch = await bcrypt.compare(password, user.passwordhash);
        if (passwordsMatch) return user;

        console.log("authorize() user:", user);
        console.log("passwordhash:", user?.passwordhash);
    
        return null;
      },
    }),
  ],
};

// 2️⃣ Pass authOptions into NextAuth ONCE
export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);

export const GET = handlers.GET;
export const POST = handlers.POST;
