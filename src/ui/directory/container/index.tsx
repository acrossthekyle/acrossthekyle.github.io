'use client';

import { useHierarchy } from '@/hooks/useHierarchy';

import styles from './stylesheet';

type Props = {
  align?: string;
  children: React.ReactNode;
  label: string;
};

export default function DirectoryContainer({
  align = 'start',
  children,
  label,
}: Props) {
  const { isOnChild } = useHierarchy();

  return (
    <aside className={styles.container(isOnChild, align)}>
      <nav aria-label={`${label} navigation`}>
        {children}
      </nav>
    </aside>
  );
}
