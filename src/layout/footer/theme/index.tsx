'use client';

import { useTheme } from '@/hooks/useTheme';

import styles from './stylesheet';

export default function Theme() {
  const { onToggleTheme } = useTheme();

  return (
    <button
      className={styles.container}
      onClick={onToggleTheme}
      title="Toggle theme"
      type="button"
    >
      <span aria-hidden="true" className={styles.dot} />
    </button>
  );
}
