'use client';

import { Moon, Sun } from 'lucide-react';

import { useHierarchy } from '@/hooks/useHierarchy';

import styles from './stylesheet';

export default function Theme() {
  const { isOnRoot } = useHierarchy();

  const handleOnClick = () => {
    let theme = 'light';

    if (localStorage.getItem('theme')) {
      theme = localStorage.getItem('theme') || 'light';
    }

    const value = theme === 'dark' ? 'light' : 'dark';

    localStorage.setItem('theme', value);

    const element = document.querySelector('html');

    if (element) {
      element.setAttribute('data-theme', value);
    }
  };

  if (!isOnRoot) {
    return null;
  }

  return (
    <button
      aria-live="polite"
      className={styles.toggle(isOnRoot)}
      onClick={handleOnClick}
      title="Toggle light &amp; dark theme"
      type="button"
    >
      <Sun className={styles.sun} />
      <Moon className={styles.moon} />
    </button>
  );
}
