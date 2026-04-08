'use client';

import { useUnits } from '@/hooks/useUnits';

import styles from './stylesheet';

export default function Units() {
  const { current, onToggle } = useUnits();

  return (
    <button className={styles.button} onClick={onToggle} type="button">
      <span className={styles.highlight}>{current.toUpperCase()}</span> [Units]
    </button>
  );
}
