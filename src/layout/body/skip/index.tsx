'use client';

import Link from 'next/link';

import { useHierarchy } from '@/hooks/useHierarchy';

import styles from './stylesheet';

export default function Skip() {
  const { isOnChild } = useHierarchy();

  if (isOnChild) {
    return null;
  }

  return (
    <Link
      className={styles.link}
      href="#skip-to"
    >
      Skip to Main Content
    </Link>
  );
}
