'use client';

import { useContext } from 'react';

import Loading from '../../loading';
import { ImageContext } from '../context';

import { useModel } from './model';
import styles from './stylesheet';

type Props = {
  useSpinner?: boolean;
};

export default function Skeleton({ useSpinner }: Props) {
  const { isLoading } = useContext(ImageContext);

  const { ref } = useModel();

  if (!isLoading) {
    return (
      <div className={styles.orientation} ref={ref} />
    );
  }

  return (
    <div className={styles.skeleton}>
      {useSpinner ? <Loading /> : (
        <div className={styles.pulse}>
          <span className={styles.sr}>Loading Image</span>
        </div>
      )}
    </div>
  );
}
