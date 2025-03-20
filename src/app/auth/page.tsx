import Link from 'next/link';
import Button from '@/src/components/Button';
import { Logo, IconKakao, IconGoogle } from '@/public/svgs';

export default function () {
  return (
    <>
      <section className='mb-80 flex flex-grow items-center justify-center'>
        <h1>
          <Logo height={72} />
        </h1>
      </section>
      <section className='flex flex-col gap-24'>
        <Button
          variant='custom'
          icon={<IconKakao className='shrink-0' />}
          className='flex items-center bg-[#FEE500] text-black'
        >
          카카오 로그인
        </Button>
        <Button
          variant='custom'
          icon={<IconGoogle className='shrink-0' />}
          className='border-gray-08 flex items-center border bg-white text-gray-8'
        >
          구글 로그인
        </Button>
      </section>
      <Link href='/home' className='mx-auto mt-24 text-small-01 text-gray-8'>
        홈으로
      </Link>
    </>
  );
}
