'use client';

import { useHierarchy } from '@/hooks/useHierarchy';

import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export default function DirectoryHover({ children }: Props) {
  const { isOnChild } = useHierarchy();

  return (
    <span className={styles.container(isOnChild)}>
      {children}
    </span>
  );
}
