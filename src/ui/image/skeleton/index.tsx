'use client';

import { useContext } from 'react';

import { ImageContext } from '../context';
import styles from './stylesheet';

export default function Skeleton() {
  const { isLoading } = useContext(ImageContext);

  if (!isLoading) {
    return null;
  }

  return (
    <div className={styles.skeleton}>
      <div className={styles.pulse}>
        <span className={styles.sr}>Loading Image</span>
      </div>
    </div>
  );
}
