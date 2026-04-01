'use client';

import { useTheme } from '@/hooks/useTheme';

import styles from './stylesheet';

export default function Theme() {
  const { onToggleTheme, theme } = useTheme();

  return (
    <button className={styles.link} onClick={onToggleTheme} type="button">
      Lights
      <span className={styles.text}>{theme === 'light' ? 'ON' : 'OFF'}</span>
    </button>
  );
}
