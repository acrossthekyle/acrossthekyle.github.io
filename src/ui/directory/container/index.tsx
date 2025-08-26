'use client';

import { useHierarchy } from '@/hooks/useHierarchy';

import styles from './stylesheet';

type Props = {
  align: 'end' | 'start';
  children: React.ReactNode;
  className?: string;
};

export default function DirectoryContainer({
  align,
  children,
  className = '',
}: Props) {
  const { isOnChild } = useHierarchy();

  return (
    <aside
      className={`${styles.container(isOnChild, align)} ${className}`.trim()}
    >
      {children}
    </aside>
  );
}
