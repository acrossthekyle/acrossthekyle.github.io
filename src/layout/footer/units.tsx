'use client';

import { useUnits } from '@/hooks/useUnits';

import styles from './stylesheet';

export default function Units() {
  const { onToggleUnits, units } = useUnits();

  return (
    <button className={styles.link} onClick={onToggleUnits} type="button">
      Units
      <span className={styles.text}>{units.toUpperCase()}</span>
    </button>
  );
}
