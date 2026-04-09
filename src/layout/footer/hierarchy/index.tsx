'use client';

import Link from 'next/link';

import { useHierarchy } from '@/hooks/useHierarchy';

import styles from './stylesheet';

export default function Hierarchy() {
  const { current, previous } = useHierarchy();

  return (
    <span className={styles.container}>
      <Link
        className={styles.link}
        href={current}
      >
        Current: <span className={styles.text}>.com{current}</span>
      </Link>
      <Link
        className={styles.link}
        href={previous}
      >
        Previous: <span className={styles.text}>.com{previous}</span>
      </Link>
    </span>
  );
}
