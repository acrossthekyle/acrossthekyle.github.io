'use client';

import tw from '@/styles';

import { useModel } from './model';

export default function Top() {
  const { handleOnClick } = useModel();

  return (
    <button
      className={styles.container}
      onClick={handleOnClick}
      type="button"
    >
      <span className={styles.inner}>
        Back to top
      </span>
    </button>
  );
};

const styles = tw({
  container: `
    py-4
    flex items-center justify-center
    w-full

    sm:w-1/2
    lg:hidden
  `,
  inner: `
    px-3 py-1
    text-tiny text-center
    uppercase
    rounded-full
    border border-current/12.5

    sm:text-xtiny
  `,
});
