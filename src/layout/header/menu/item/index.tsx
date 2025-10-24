'use client';

import { useLoad } from '@/hooks/useLoad';

import styles from './stylesheet';

type Props = {
  children: React.ReactNode;
  index: number;
};

export default function MenuItem({ children, index }: Props) {
  const { isFirstLoad } = useLoad();

  return (
    <li
      className={styles.item(isFirstLoad)}
      style={{ animationDelay: `${0.1 + (index * 0.025)}s` }}
    >
      {children}
    </li>
  );
}
