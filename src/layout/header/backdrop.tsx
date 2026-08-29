'use client';

import tw from '@/styles';

type Props = {
  isActive: boolean;
  onClick: () => void;
};

export default function Backdrop({ isActive, onClick }: Props) {
  return (
    <div
      className={styles.container(isActive)}
      onClick={onClick}
      role="presentation"
    />
  );
};

const styles = {
  container: (isActive: boolean) => tw(`
    absolute top-0 left-0 right-0
    bg-(--background)/95

    motion-safe:duration-300

    ${isActive ? 'h-[200svh] opacity-100 z-40' : 'h-svh opacity-0 -z-1'}
  `),
};
