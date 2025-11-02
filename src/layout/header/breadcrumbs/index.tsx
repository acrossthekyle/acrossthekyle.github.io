'use client';

import Link from 'next/link';

import { useHierarchy } from '@/hooks/useHierarchy';

import { routes } from '../constants';
import styles from './stylesheet';

export default function Breadcrumbs() {
  const { isOnChild, isOnParent, isOnRoot, path } = useHierarchy();

  const match = routes.find((route) => path.includes(route.base));

  const child = isOnChild && match ? path.replace(`${match.base}/`, '').replace(/-/g, ' ') : null;

  if (isOnRoot || !match) {
    return null;
  }

  return (
    <span className={styles.container}>
      <span className={styles.slash(false)}>/</span>
      <Link href="/">Home</Link>
      {(isOnParent || isOnChild) && (
        <>
          <span className={styles.slash(isOnParent)}>
            /
          </span>
          {isOnParent ? (
            <span className={styles.match(true)}>
              {match.text}
            </span>
          ) : (
            <Link
              className={styles.match(isOnParent)}
              href={match.base}
            >
              {match.text}
            </Link>
          )}
          {child && (
            <>
              <span className={styles.slash(true)}>
                /
              </span>
              <span className={styles.match(true)}>
                {child}
              </span>
            </>
          )}
        </>
      )}
    </span>
  );
}
