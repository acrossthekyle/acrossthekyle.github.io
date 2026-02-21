'use client';

import { useContext } from 'react';

import { TimelineContext } from '../context';

import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  index?: number;
};

export default function Item({ children, index }: Props) {
  const {
    shouldTruncate,
    visibleCount,
  } = useContext(TimelineContext);

  if (index !== undefined && shouldTruncate) {
    if (index > visibleCount - 1) {
      return null;
    }
  }

  return (
    <li className={styles.container}>
      {children}
    </li>
  );
}
