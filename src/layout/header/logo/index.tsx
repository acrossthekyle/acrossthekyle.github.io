'use client';

import { Asterisk } from 'lucide-react';
import Link from 'next/link';

import { useHierarchy } from '@/hooks/useHierarchy';

import styles from './stylesheet';

export default function Header() {
  const { isOnRoot } = useHierarchy();

  return (
    <Link className={styles.container(isOnRoot)} href="/">
      <Asterisk className={styles.icon} />
    </Link>
  );
}
