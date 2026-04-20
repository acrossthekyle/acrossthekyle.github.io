'use client';

import { useContext } from 'react';

import { ImageContext } from '../context';

import styles from './stylesheet';

type Props = {
  className?: string;
};

export default function Skeleton({ className = '' }: Props) {
  const { isLoading } = useContext(ImageContext);

  if (!isLoading) {
    return null;
  }

  return (
    <div className={`${styles.skeleton} ${className}`.trim()}>
      <div className={styles.pulse}>
        <span className={styles.sr}>Loading Image</span>
      </div>
    </div>
  );
}
