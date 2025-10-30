'use client';

import { useHierarchy } from '@/hooks/useHierarchy';
import { useLoad } from '@/hooks/useLoad';

import styles from './stylesheet';

type Props = {
  children: React.ReactNode;
  index: number;
};

export default function MenuItem({ children, index }: Props) {
  const { isFirstLoad } = useLoad();

  const { isOnRoot } = useHierarchy();

  return (
    <li
      className={styles.item(isFirstLoad, isOnRoot)}
      style={{ animationDelay: `${0.1 + (index * 0.025)}s` }}
    >
      {children}
    </li>
  );
}
