'use client';

import { useHierarchy } from '@/hooks/useHierarchy';

import styles from './stylesheet';

export default function Footer() {
  const { isOnRoot } = useHierarchy();

  return (
    <footer className={styles.footer}>
      <span className={styles.copy(isOnRoot)}>
        &copy; {new Date().getFullYear()}
      </span>
    </footer>
  );
}
