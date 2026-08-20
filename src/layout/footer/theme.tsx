'use client';

import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

import tw from '@/styles';

export default function Theme() {
  const [mounted, setMounted] = useState(false);

  const { resolvedTheme, setTheme } = useTheme();

  const pathname = usePathname();

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

  if (!mounted || pathname.includes('img')) {
    return null
  }

  return (
    <button
      className={styles.container}
      onClick={handleOnClick}
      title="Toggle theme"
      type="button"
    >
      <span className={styles.circle} />
    </button>
  );
};

const styles = tw({
  container: `
    absolute bottom-3 right-1 z-20
    p-4
    flex items-center
    text-(--foreground)
    font-thin font-mono
    text-xtiny
    uppercase
    tracking-widest

    sm:fixed
    sm:top-1
    sm:bottom-auto
  `,
  circle: `
    w-4 h-4
    rounded-full
    border light:border-(--background)/40
    bg-(--foreground)
  `,
});
