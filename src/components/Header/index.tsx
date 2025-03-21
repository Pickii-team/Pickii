'use client';

import { Logo, IconUser, IconSearch } from '@/public/svgs';
import { usePathname } from 'next/navigation';

export default function Header() {
  const currentPath = usePathname();
  const isLogin = false;
  const isTotalStat = currentPath.includes('totalstat');

  return (
    <header>
      <div className='flex justify-between px-16 py-16'>
        <Logo />
        {isTotalStat ? <IconSearch /> : isLogin ? <IconUser /> : null}
      </div>
    </header>
  );
}
