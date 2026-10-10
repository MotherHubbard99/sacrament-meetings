import { auth } from '@/auth';
import HeaderNav from './HeaderNav';

export default async function HeaderClientWrapper() {
  const session = await auth();

  return <HeaderNav session={session} />;
}
