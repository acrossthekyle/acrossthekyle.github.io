'use client';

import { useHierarchy } from '@/hooks/useHierarchy';

import styles from './stylesheet';

type Props = {
  align?: 'end' | 'start';
  children: React.ReactNode;
};

export default function DirectoryContainer({
  align = 'start',
  children,
}: Props) {
  const { isOnChild } = useHierarchy();

  return (
    <aside className={styles.container(isOnChild, align)}>
      {children}
    </aside>
  );
}
