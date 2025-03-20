import Link from 'next/link';
import Button from '@/src/components/Button';
import MessageSection from '@/src/containers/auth/signup-completion/message-section';
import { Logo } from '@/public/svgs';

export default function SignupCompletionPage() {
  const username = '피키피키';
  return (
    <>
      <Logo height='48' className='mx-auto' />
      <MessageSection username={username} />
      <Link href='/home'>
        <Button variant='filled' buttonColor='primary-variant'>
          피키 시작하기
        </Button>
      </Link>
    </>
  );
}
