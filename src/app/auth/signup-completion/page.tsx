import Button from '@/src/components/Button';
import { Logo, IconSmileEmoji } from '@/public/svgs';
import Link from 'next/link';

export default function () {
  const username = '피키피키';
  return (
    <>
      <Logo height='48' className='mx-auto' />
      <section className='-mt-80 flex basis-full flex-col items-center justify-center gap-24'>
        <IconSmileEmoji width={200} height={200} />
        <p className='text-head-01 text-primaryVariant'>가입 완료</p>
        <p className='text-large-02'>
          환영합니다,
          <br />
          <span className='text-title-03'>{username}</span>님!
        </p>
      </section>
      <Link href='/home'>
        <Button variant='filled' buttonColor='primary-variant'>
          피키 시작하기
        </Button>
      </Link>
    </>
  );
}
