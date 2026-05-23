'use client';

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

import styles from './stylesheet';

export default function Theme() {
  const [mounted, setMounted] = useState(false);

  const { setTheme, theme } = useTheme();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  const handleOnClick = () => {
    if (theme === 'system') {
      setTheme('light');
    }

    if (theme === 'light') {
      setTheme('dark');
    }

    if (theme === 'dark') {
      setTheme('system');
    }
  };

  if (!mounted) {
    return null
  }

  return (
    <button
      aria-label="toggle dark/light theme"
      className={styles.toggle(theme)}
      onClick={handleOnClick}
      type="button"
    />
  );
}
