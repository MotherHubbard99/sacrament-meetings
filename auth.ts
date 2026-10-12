import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import bcrypt from 'bcryptjs';
import { getUserByEmail } from '@/app/lib/meetings-db';

export const authOptions = {
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsed = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (!parsed.success) return null;

        const { email, password } = parsed.data;
        const user = await getUserByEmail(email);
        
        console.log("User from DB:", user);

          if (!user) {
                console.log("User not found");
                return null;
            }

        console.log("Comparing:", password, "with hash:", user.passwordhash);
        const passwordsMatch = await bcrypt.compare(password, user.passwordhash);
        console.log("Passwords match:", passwordsMatch);

    if (passwordsMatch) {
        return {
            id: user.id,
            email: user.email,
            name: user.display_name  
        };
    }
                    
        return null;
      },
    }),
  ],
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);

export const GET = handlers.GET;
export const POST = handlers.POST;
