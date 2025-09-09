'use client';

import { useHierarchy } from '@/hooks/useHierarchy';

import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export default function Main({ children }: Props) {
  const { isOnRoot } = useHierarchy();

  return (
    <main className={styles.main(isOnRoot)}>
      {children}
    </main>
  );
}
