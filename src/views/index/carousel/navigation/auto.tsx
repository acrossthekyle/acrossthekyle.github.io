'use client';

import tw from '@/styles';

type Props = {
  canAutoPlay: boolean;
  onClick: () => void;
};

export default function Auto({ canAutoPlay, onClick }: Props) {
  return (
    <button
      aria-label={`${canAutoPlay ? 'pause' : 'play'} image carousel`}
      className={styles.container}
      onClick={onClick}
      type="button"
    >
      {canAutoPlay ? 'Pause' : 'Play'}
    </button>
  );
};

const styles = tw({
  container: `
    absolute bottom-6 left-6 z-4
    px-3 py-2
    leading-[0.8]
    text-tiny
    uppercase
    tracking-wider
    bg-(--background)
    rounded-full

    motion-safe:duration-300

    hover:bg-(--background)/50

    sm:text-xtiny
  `,
});
