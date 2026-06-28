'use client';

import { ArrowUpLeft } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { styles } from './stylesheet';

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <header>
      {pathname === '/' ? (
        <Link aria-label="acrossthekyle.com" className={styles.anchor} href="/">
          <span>K</span>
          <span>/</span>
          <span>G</span>
        </Link>
      ) : (
        <button
          className={`${styles.anchor} ${styles.tucked}`}
          onClick={router.back}
          type="button"
        >
          <ArrowUpLeft className={styles.icon} />
        </button>
      )}
    </header>
  );
}
