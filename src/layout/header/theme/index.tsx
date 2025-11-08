'use client';

import { Moon, Sun } from 'lucide-react';

import { useHierarchy } from '@/hooks/useHierarchy';
import { useTheme } from '@/hooks/useTheme';

import styles from './stylesheet';

export default function Theme() {
  const { isOnRoot } = useHierarchy();

  const { onToggleTheme } = useTheme();

  if (!isOnRoot) {
    return null;
  }

  return (
    <button
      aria-live="polite"
      className={styles.toggle(isOnRoot)}
      onClick={onToggleTheme}
      title="Toggle light &amp; dark theme"
      type="button"
    >
      <Sun className={styles.sun} />
      <Moon className={styles.moon} />
    </button>
  );
}
