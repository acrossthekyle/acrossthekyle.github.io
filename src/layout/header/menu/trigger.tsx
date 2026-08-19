'use client';

import tw from '@/styles';

type Props = {
  isActive: boolean;
  onClick: () => void;
};

export default function Trigger({ isActive, onClick }: Props) {
  return (
    <button
      className={styles.container}
      onClick={onClick}
      type="button"
    >
      <span className={styles.inner}>
        <span className={`${styles.bar} ${styles.first(isActive)}`} />
        <span className={`${styles.bar} ${styles.middle(isActive)}`} />
        <span className={`${styles.bar} ${styles.last(isActive)}`} />
      </span>
    </button>
  );
};

const styles = tw({
  container: `
    absolute right-4 top-2.75 z-100
    flex justify-center items-end
    p-2

    motion-safe:duration-300
  `,
  inner: `
    relative
    w-6 h-6
  `,
  bar: `
    block
    absolute
    h-px
    bg-(--foreground)
    rounded-sm

    motion-safe:duration-300
  `,
  first: (isActive: boolean) => tw(`
    w-full
    ${isActive ? 'top-3' : 'top-1.5'}
    ${isActive ? 'rotate-45' : 'rotate-0'}
  `),
  middle: (isActive: boolean) => tw(`
    top-3
    w-1/2
    ${isActive ? 'right-full' : 'right-0'}
    ${isActive ? 'opacity-0' : 'opacity-100'}
  `),
  last: (isActive: boolean) => tw(`
    ${isActive ? 'w-full' : 'w-2/3'}
    ${isActive ? 'top-3' : 'top-4.5 right-0'}
    ${isActive ? '-rotate-45' : 'rotate-0'}
  `),
});
