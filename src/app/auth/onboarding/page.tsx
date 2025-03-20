'use client';

import Button from '@/src/components/Button';
import { Logo } from '@/public/svgs';
import Input from '@/src/components/Input';

export default function () {
  return (
    <>
      <Logo height='48' className='mx-auto mb-80' />
      <section className='flex basis-full flex-col gap-80'>
        <div className='flex flex-col gap-32'>
          <p className='text-left text-title-01'>
            피키에 오신 것을 환영해요!
            <br />
            닉네임을 설정해 주세요.
          </p>
          <Input
            inputText='피키피키'
            setInputText={() => {}}
            variant='default'
            hasClearButton
          />
        </div>
      </section>
      <Button variant='filled' buttonColor='primary-variant'>
        가입 완료하기
      </Button>
    </>
  );
}
