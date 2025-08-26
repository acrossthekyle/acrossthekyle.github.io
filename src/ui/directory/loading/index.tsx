'use client';

import { useHierarchy } from '@/hooks/useHierarchy';

import styles from './stylesheet';

export default function DirectoryLoading() {
  const { isOnChild } = useHierarchy();

  return (
    <>
      {Array.from({ length: 13 }).map((_, index) => (
        <li className={styles.pulse(isOnChild)} key={index} />
      ))}
    </>
  );
}
