'use client';

import { Moon, Sun } from 'lucide-react';

import { useHierarchy } from '@/hooks/useHierarchy';
import { useTheme } from '@/hooks/useTheme';

import styles from './stylesheet';

type Props = {
  isMenuActive: boolean;
};

export default function Theme({ isMenuActive }: Props) {
  const { isOnRoot } = useHierarchy();

  const { onToggleTheme } = useTheme();

  return (
    <button
      aria-live="polite"
      className={styles.toggle(isOnRoot, isMenuActive)}
      onClick={onToggleTheme}
      title="Toggle light &amp; dark theme"
      type="button"
    >
      <Sun className={styles.sun} />
      <Moon className={styles.moon} />
    </button>
  );
}
