'use client';

import { CircleOff } from 'lucide-react';
import Link from 'next/link';

import { useHierarchy } from '@/hooks/useHierarchy';

import styles from './stylesheet';

export default function Logo() {
  const { isOnRoot } = useHierarchy();

  return (
    <Link
      aria-label="acrossthekyle.com home"
      className={styles.link(isOnRoot)}
      href="/"
    >
      <CircleOff
        aria-hidden="true"
        className={styles.icon}
        focusable="false"
        role="presentation"
      />
    </Link>
  );
}
