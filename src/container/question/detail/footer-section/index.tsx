'use client';
import React, { useState } from 'react';
import Input from '@/src/components/Input';
import { IconSend } from '@/public/svgs';

type Props = {};

export default function FooterSection({}: Props) {
  const [value, setValue] = useState('');

  return (
    <footer className='sticky bottom-0 border-t border-gray-4 bg-white px-12 py-8'>
      <Input
        inputText={value}
        setInputText={setValue}
        variant='default'
        hasClearButton
        placeholder='댓글을 입력해 주세요.'
      >
        <button>
          <IconSend />
        </button>
      </Input>
    </footer>
  );
}
