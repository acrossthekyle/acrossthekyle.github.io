'use client';

import { useContext } from 'react';

import { ImageContext } from '../context';
import styles from './stylesheet';

export default function Rotate() {
  const {
    isLandscapeOrientation,
    onDismissWarn,
    shouldWarn,
  } = useContext(ImageContext);

  if (!shouldWarn) {
    return null;
  }

  return (
    <div className={styles.container} role="alert">
      <p className={styles.message}>
        {isLandscapeOrientation && 'Rotate device for a better viewing experience'}
        {!isLandscapeOrientation && 'Device already in best viewing experience'}
      </p>
      <button
        className={styles.dismiss}
        onClick={onDismissWarn}
        type="button"
      >
        Dismiss
      </button>
    </div>
  );
}
