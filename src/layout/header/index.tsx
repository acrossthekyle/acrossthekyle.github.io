'use client';

import { usePathname } from 'next/navigation';

import { useMenu } from '@/hooks/useMenu';

import { styles } from './stylesheet';

export default function Header() {
  const { onMenu } = useMenu();

  const pathname = usePathname();

  if (pathname.includes('/images')) {
    return null;
  }

  return (
    <header className={styles.container}>
      <button className={styles.anchor} onClick={onMenu} type="button">
        <span className={styles.top} />
        <span className={styles.bottom} />
      </button>
    </header>
  );
}
