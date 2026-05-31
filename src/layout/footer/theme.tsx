'use client';

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

import styles from './stylesheet';

export default function Theme() {
  const [mounted, setMounted] = useState(false);

  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  const handleOnClick = () => {
    if (resolvedTheme === 'dark') {
      setTheme('light');
    }

    if (resolvedTheme === 'light') {
      setTheme('dark');
    }
  };

  if (!mounted) {
    return null
  }

  return (
    <button
      className={styles.toggle}
      onClick={handleOnClick}
      title="Toggle theme"
      type="button"
    />
  );
}
