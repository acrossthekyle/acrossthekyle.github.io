'use client';

import { Search as Icon } from 'lucide-react';
import Link from 'next/link';

import { useHierarchy } from '@/hooks/useHierarchy';

import styles from './stylesheet';

type Props = {
  isMenuActive: boolean;
};

export default function Search({ isMenuActive }: Props) {
  const { isOnRoot } = useHierarchy();

  return (
    <Link className={styles.search(isOnRoot, isMenuActive)} href="/search">
      <Icon className={styles.icon} />
    </Link>
  );
}
