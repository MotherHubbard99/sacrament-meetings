import { LoginForm } from '@/app/components/login-form';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';


export default async function LoginPage() {
  const session = await auth();

  // If already logged in → redirect to dashboard
  if (session) {
    redirect('/dashboard');
  }

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-sm">
        <h1>Sign In</h1>
        <LoginForm />
      </div>
    </main>
  );
}