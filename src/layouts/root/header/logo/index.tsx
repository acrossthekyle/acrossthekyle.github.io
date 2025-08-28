'use client';

import Link from 'next/link';

import { useHierarchy } from '@/hooks/useHierarchy';

import styles from './stylesheet';

export default function Header() {
  const { isOnParent, isOnRoot } = useHierarchy();

  return (
    <Link className={styles.logo(isOnRoot, isOnParent)} href="/">
      @
    </Link>
  );
}
