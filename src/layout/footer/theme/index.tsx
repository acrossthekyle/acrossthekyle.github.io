'use client';

import tw from '@/styles';

import { useModel } from './model';

export default function Theme() {
  const { handleOnClick, isMounted } = useModel();

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
    bg-(--foreground)

    dark:border
    dark:border-(--background)/40
  `,
});
