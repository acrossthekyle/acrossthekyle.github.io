'use client';

import { useUnits } from '@/hooks/useUnits';

import styles from './stylesheet';

export default function Units() {
  const { current, onToggle } = useUnits();

  return (
    <button className={styles.link} onClick={onToggle} type="button">
      Units
      <span className={styles.text}>{current.toUpperCase()}</span>
    </button>
  );
}
