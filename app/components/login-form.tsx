'use client';

import { useActionState } from 'react';
import { authenticate } from '@/app/lib/actions';

export function LoginForm() {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  return (
    <form action={formAction}
      className="w-full max-w-sm mx-auto bg-white p-8 rounded-xl shadow-lg space-y-6"
    >
      <h2 className="text-3xl font-semibold text-center text-blue-700">
        Sign In
      </h2>

      <div className="flex flex-col space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="border border-gray-300 bg-gray-50 rounded-lg px-4 py-3
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="password" className="text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          id="password"
          type="password"
          name="password"
          minLength={6}
          required
          className="border border-gray-300 bg-gray-50 rounded-lg px-4 py-3
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        aria-disabled={isPending}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium
                   py-3 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isPending ? 'Signing in...' : 'Sign In'}
      </button>

      {errorMessage && (
        <p role="alert" className="text-red-600 text-sm text-center">
          {errorMessage}
        </p>
      )}
    </form>
  );
}
