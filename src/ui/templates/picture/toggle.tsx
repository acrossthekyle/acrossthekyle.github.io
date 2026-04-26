'use client';

import { Maximize, Minimize } from 'lucide-react';

import { useSize } from '@/hooks/useSize';

import styles from './stylesheet';

export default function Toggle() {
  const { onSize, size } = useSize();

  return (
    <div className={styles.controls}>
      <button
        className={styles.button}
        onClick={() => onSize()}
        title={size === 'full' ? 'Shrink image size' : 'Expand image size'}
        type="button"
      >
        {size === 'full' ? (
          <Minimize className={styles.icon} />
        ) : (
          <Maximize className={styles.icon} />
        )}
      </button>
    </div>
  );
}
