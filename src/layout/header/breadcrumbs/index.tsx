'use client';

import { useRouter } from 'next/navigation';

import { routes } from '@/constants';
import { useHierarchy } from '@/hooks/useHierarchy';

import styles from './stylesheet';

export default function Breadcrumbs() {
  const router = useRouter();

  const { isOnChild, isOnRoot, path } = useHierarchy();

  const match = routes.find((route) => path.includes(route.base));

  const handleOnBack = () => {
    router.back();
  };

  if (isOnRoot || !match) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1 className={styles.item}>
          {match.text}
        </h1>
        {isOnChild && (
          <button className={styles.back} onClick={handleOnBack} type="button">Back to list</button>
        )}
      </div>
      <p className={styles.label}>{match.label}</p>
    </div>
  );
}
