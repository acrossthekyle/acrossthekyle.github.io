'use client';

import { useHierarchy } from '@/hooks/useHierarchy';

import styles from './stylesheet';

type Props = {
  first: string;
  second: string;
  third: string;
};

export default function DirectoryTextInfo({ first, second, third }: Props) {
  const { isOnChild } = useHierarchy();

  return (
    <span className={styles.container(isOnChild)}>
      <span className={styles.first}>{first}</span>
      <span className={styles.second}>{second}</span>
      <span className={styles.third}>{third}</span>
    </span>
  );
}
