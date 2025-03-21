'use client';

import Input from '@/src/components/Input';
import { IconSearch } from '@/public/svgs';
import { useState } from 'react';

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [query, setQuery] = useState('');
  return (
    <div className='p-16'>
      <Input
        inputText={query}
        setInputText={setQuery}
        variant='default'
        hasClearButton={true}
      >
        <button type='submit'>
          <IconSearch />
        </button>
      </Input>
      {children}
    </div>
  );
}
