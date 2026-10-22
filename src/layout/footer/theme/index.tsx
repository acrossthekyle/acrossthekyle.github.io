'use client';

import { MoonStar, Sun } from 'lucide-react';

import tw from '@/styles';

import { useModel } from './model';

export default function Theme() {
  const { current, handleOnClick, isMounted } = useModel();

  if (!isMounted) {
    return null
  }

  return (
    <button
      className={styles.container}
      onClick={handleOnClick}
      title="Toggle theme"
      type="button"
    >
      {current === 'light' ? (
        <MoonStar className={styles.icon} />
      ) : (
        <Sun className={styles.icon} />
      )}
    </button>
  );
};

const styles = tw({
  container: `
    absolute bottom-3 right-0 z-20
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
  icon: `
    size-5
    stroke-1 dark:stroke-2
    fill-(--foreground)/50 dark:fill-(--foreground)

    lg:size-4
  `,
});
