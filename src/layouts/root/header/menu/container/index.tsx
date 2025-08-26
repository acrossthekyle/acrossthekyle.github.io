'use client';

import { useHierarchy } from '@/hooks/useHierarchy';

import styles from './stylesheet';

type Props = {
  children: React.ReactNode;
};

export default function MenuContainer({ children }: Props) {
  const { isOnParent, isOnRoot } = useHierarchy();

  return (
    <nav className={styles.container(isOnRoot, isOnParent)}>
      <ul>
        {children}
      </ul>
    </nav>
  );
}
