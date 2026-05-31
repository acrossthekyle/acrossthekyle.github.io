'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './stylesheet';

export default function Header() {
  const path = usePathname();

  return (
    <header className={styles.container}>
      <Link
        className={styles.anchor(path === '/')}
        href="/"
      >
        Index
      </Link>
      <span className={styles.divider} role="presentation">/</span>
      <Link
        className={styles.anchor(path.includes('/catalog'))}
        href="/catalog"
      >
        Collections
      </Link>
    </header>
  );
}
