'use client';

import { Search as Icon } from 'lucide-react';
import Link from 'next/link';

import { useHierarchy } from '@/hooks/useHierarchy';

import styles from './stylesheet';

export default function Search() {
  const { isOnRoot } = useHierarchy();

  if (!isOnRoot) {
    return null;
  }

  return (
    <Link className={styles.search} href="/search">
      <Icon className={styles.icon} />
    </Link>
  );
}
