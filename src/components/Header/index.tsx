'use client';

import { Logo, IconUser, IconSearch } from '@/public/svgs';
import { usePathname } from 'next/navigation';

export default function Header() {
  const currentPath = usePathname();
  const isLogin = false;
  const isTotalStat = currentPath.includes('totalstat');

  return (
    <header>
      <div className='flex h-64 w-full justify-between px-16 py-16'>
        <Logo fill />
        {isTotalStat ? <IconSearch /> : isLogin ? <IconUser /> : <div></div>}
      </div>
    </header>
  );
}
