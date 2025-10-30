'use client';

import Link from 'next/link';

import { useHierarchy } from '@/hooks/useHierarchy';

import { routes } from '../constants';
import styles from './stylesheet';

export default function Breadcrumbs() {
  const { isOnChild, isOnRoot, path } = useHierarchy();

  const match = routes.find((route) => path.includes(route.base));

  if (isOnRoot || !match) {
    return null;
  }

  return (
    <span className={styles.container}>
      / <Link href="/">Home</Link>
      {isOnChild && (
        <>
          {' '}/ <Link href={match.base}>{match.text}</Link>
        </>
      )}
    </span>
  );
}
