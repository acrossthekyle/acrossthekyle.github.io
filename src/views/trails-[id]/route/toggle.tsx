'use client';

import { useContext } from 'react';

import { GpxContext } from './context';
import styles from './stylesheet';

export default function Toggle() {
  const { isToggled, onToggle } = useContext(GpxContext);

  return (
    <button
      className={styles.view}
      onClick={onToggle}
      type="button"
    >
      {isToggled ? 'Hide' : 'View'} list
    </button>
  );
}
