'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';

import tw from '@/styles';

type Props = {
  isPrevious?: boolean;
  onClick: () => void;
};

export default function Navigate({ isPrevious, onClick }: Props) {
  return (
    <button
      aria-hidden="true"
      className={`${styles.container} ${isPrevious ? styles.left : styles.right}`}
      onClick={onClick}
      tabIndex={-1}
      type="button"
    >
      {isPrevious ? (
        <ChevronLeft aria-hidden="true" className={styles.icon} />
      ) : (
        <ChevronRight aria-hidden="true" className={styles.icon} />
      )}
    </button>
  );
};

const styles = tw({
  container: `
    absolute top-0 bottom-0 z-1
    w-1/2
    px-4
    outline-0
  `,
  left: `
    left-0
  `,
  right: `
    flex justify-end items-center
    right-0
    text-right
  `,
  icon: `
    w-6 h-6
    stroke-2 stroke-white
  `,
});
