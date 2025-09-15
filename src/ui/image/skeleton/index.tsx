'use client';

import { useContext } from 'react';

import { ImageContext } from '../context';
import { useModel } from './model';
import styles from './stylesheet';

export default function Skeleton() {
  const { isLoading } = useContext(ImageContext);

  const { ref } = useModel();

  if (!isLoading) {
    return (
      <div className={styles.orientation} ref={ref} />
    );
  }

  return (
    <div className={styles.skeleton}>
      <div className={styles.pulse}>
        <span className={styles.sr}>Loading Image</span>
      </div>
    </div>
  );
}
