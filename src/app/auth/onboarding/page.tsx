'use client';

import Button from '@/src/components/Button';
import NicknameSection from '@/src/containers/auth/onboarding/nickname-section';
import { Logo } from '@/public/svgs';

export default function () {
  return (
    <>
      <Logo height='48' className='mx-auto mb-80' />
      <NicknameSection />
      <Button variant='filled' buttonColor='primary-variant'>
        가입 완료하기
      </Button>
    </>
  );
}
