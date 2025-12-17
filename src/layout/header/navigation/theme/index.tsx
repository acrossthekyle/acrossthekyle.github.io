'use client';


import { useHierarchy } from '@/hooks/useHierarchy';
import { useTheme } from '@/hooks/useTheme';

import styles from './stylesheet';

type Props = {
  isMenuActive: boolean;
};

export default function Theme({ isMenuActive }: Props) {
  const { isOnRoot } = useHierarchy();

  const { onToggleTheme, theme } = useTheme();

  return (
    <button
      aria-label={`switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      aria-live="polite"
      className={styles.toggle(isOnRoot, isMenuActive)}
      onClick={onToggleTheme}
      type="button"
    >
      Switch to
      <span aria-hidden="true" className={styles.sun}>Dark</span>
      <span aria-hidden="true" className={styles.moon}>Light</span>
      Mode
    </button>
  );
}
