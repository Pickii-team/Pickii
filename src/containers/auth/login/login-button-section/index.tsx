import { IconKakao, IconGoogle } from '@/public/svgs';
import Button from '@/src/components/Button';
import React from 'react';

type Props = {};

export default function LoginButtonSection({}: Props) {
  return (
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
  );
}
