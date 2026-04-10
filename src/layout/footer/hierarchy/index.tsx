'use client';

import Link from 'next/link';

import { useHierarchy } from '@/hooks/useHierarchy';

import styles from './stylesheet';

export default function Hierarchy() {
  const { current, previous } = useHierarchy();

  const isSame = current === previous;

  return (
    <span className={styles.container}>
      <Link
        className={styles.link}
        href="/"
      >
        [Home] <span className={styles.text}>.com/</span>
      </Link>
      <Link
        className={styles.link}
        href={current}
      >
        [Current] <span className={styles.text}>{isSame ? 'N/A' : current}</span>
      </Link>
      <Link
        className={styles.link}
        href={previous}
      >
        [Previous] <span className={styles.text}>{isSame ? 'N/A' : previous}</span>
      </Link>
    </span>
  );
}
