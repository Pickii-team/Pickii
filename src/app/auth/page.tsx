import Link from 'next/link';
import LoginButtonSection from '@/src/containers/auth/login/login-button-section';
import { Logo } from '@/public/svgs';

export default function () {
  return (
    <>
      <section className='mb-80 flex flex-grow items-center justify-center'>
        <h1>
          <Logo height={72} />
        </h1>
      </section>
      <LoginButtonSection />
      <Link href='/home' className='mx-auto mt-24 text-small-01 text-gray-8'>
        홈으로
      </Link>
    </>
  );
}
