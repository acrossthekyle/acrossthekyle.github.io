'use client';

import { useUnits } from '@/hooks/useUnits';

import styles from './stylesheet';

export default function Units() {
  const { current, onToggle } = useUnits();

  return (
    <button className={styles.button} onClick={onToggle} type="button">
      {current.toUpperCase()} [Units]
    </button>
  );
}
