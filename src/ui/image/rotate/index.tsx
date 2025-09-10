'use client';

import { Smartphone, X } from 'lucide-react';
import { useContext, useEffect, useState } from 'react';

import { ImageContext } from '../context';
import styles from './stylesheet';

export default function Rotate() {
  const {
    isLandscapeOrientation,
    onDismissWarn,
    shouldWarn,
  } = useContext(ImageContext);

  const [shouldRotate, setShouldRotate] = useState(false);

  useEffect(() => {
    if (shouldWarn) {
      setTimeout(() => {
        setShouldRotate(true);
      }, 500);
    } else {
      setShouldRotate(false);
    }
  }, [shouldWarn]);

  if (!shouldWarn) {
    return null;
  }

  return (
    <button
      className={styles.container}
      onClick={onDismissWarn}
      role="alert"
      type="button"
    >
      <p className={styles.message}>
        {isLandscapeOrientation && 'Rotate device for maximum image size'}
        {!isLandscapeOrientation && 'Image already at maximum size'}
      </p>
      {isLandscapeOrientation && (
        <div className={styles.rotate(shouldRotate)}>
          <Smartphone size={36} strokeWidth={1} />
        </div>
      )}
      {!isLandscapeOrientation && (
        <Smartphone size={36} strokeWidth={1} />
      )}
      <X className={styles.x} size={24} strokeWidth={1} />
    </button>
  );
}
