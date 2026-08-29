'use client';

import tw from '@/styles';

import Icon from './icon';

type Props = {
  isActive: boolean;
  onClick: () => void;
};

export default function Trigger({ isActive, onClick }: Props) {
  return (
    <button
      aria-label="toggle menu"
      className={styles.container}
      onClick={onClick}
      type="button"
    >
      <Icon isActive={isActive} />
    </button>
  );
};

const styles = {
  container: tw(`
    absolute right-4 top-2.75 z-100
    flex justify-center items-end
    p-2

    motion-safe:duration-300
  `),
};
