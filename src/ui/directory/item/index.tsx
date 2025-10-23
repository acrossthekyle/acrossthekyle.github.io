'use client';

import { useHierarchy } from '@/hooks/useHierarchy';

import styles from './stylesheet';

type Props = {
  children: React.ReactNode;
  index: number;
};

export default function DirectoryItem({ children, index }: Props) {
  const { isOnChild } = useHierarchy();

  return (
    <li
      className={styles.item(isOnChild)}
      style={{ animationDelay: `${0.1 + (index * 0.025)}s` }}
    >
      {children}
    </li>
  );
}
