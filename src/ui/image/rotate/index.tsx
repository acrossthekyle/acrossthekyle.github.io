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
        {isLandscapeOrientation && 'Rotate your device for a widescreen 16:9 zoomed-in viewing experience'}
        {!isLandscapeOrientation && 'Device already in optimal rotation for best zoomed-in viewing experience'}
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
