'use client';

import { useTheme } from '@/hooks/useTheme';

import styles from './stylesheet';

export default function Theme() {
  const { onToggleTheme } = useTheme();

  return (
    <button
      onClick={onToggleTheme}
      title="Toggle theme"
      type="button"
    >
      <span aria-hidden="true" className={styles.dot} />
    </button>
  );
}
