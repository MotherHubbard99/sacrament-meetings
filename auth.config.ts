import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;

      // Protect /dashboard
      if (nextUrl.pathname.startsWith('/dashboard')) {
        return isLoggedIn; // MUST be true or false
      }

      // Prevent logged-in users from visiting /login
      if (isLoggedIn && nextUrl.pathname === '/login') {
        return false; // MUST be true or false
      }

      return true; // MUST be true or false
    },
  },

  providers: [], // providers added in auth.ts
} satisfies NextAuthConfig;
