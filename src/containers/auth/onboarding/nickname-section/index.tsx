'use client';

import { CreateUserProfile } from '@/src/actions/user/create-user-profile';
import { ReadUserInfo } from '@/src/actions/user/read-user-info';
import Button from '@/src/components/Button';
import Input from '@/src/components/Input';
import { useRouter } from 'next/navigation';
import { useState, useEffect, FormEvent } from 'react';

export default function NicknameSection() {
  const router = useRouter();
  const [nickName, setNickName] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const res = await CreateUserProfile(nickName);
    if (!res?.success) {
      console.log('error');
    }
    router.push('/');
  };

  useEffect(() => {
    const fetchUserInfo = async () => {
      const userInfo = await ReadUserInfo();
      if (userInfo) {
        console.log(userInfo);
        setNickName(userInfo?.data?.user_metadata.name);
      }
    };
    fetchUserInfo();
  }, []);

  return (
    <section className='flex basis-full flex-col'>
      <p className='mb-32 text-left text-title-01'>
        피키에 오신 것을 환영해요!
        <br />
        닉네임을 설정해 주세요.
      </p>
      <form
        onSubmit={handleSubmit}
        className='flex basis-full flex-col justify-between gap-80'
      >
        <Input
          inputText={nickName}
          setInputText={setNickName}
          variant='limit'
          maxLength={10}
          hasClearButton
        />
        <Button
          type='submit'
          variant='filled'
          buttonColor='primary-variant'
          disabled={nickName === ''}
        >
          가입 완료하기
        </Button>
      </form>
    </section>
  );
}
