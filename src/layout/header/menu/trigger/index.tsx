'use client';

import tw, { cs } from '@/styles';

import Icon from './icon';

type Props = {
  isActive: boolean;
  onClick: () => void;
};

export default function Trigger({ isActive, onClick }: Props) {
  return (
    <button
      aria-label="toggle menu"
      className={
        cs(
          styles.container,
          !isActive && styles.nudge,
        )
      }
      onClick={onClick}
      type="button"
    >
      <Icon isActive={isActive} />
    </button>
  );
};

const styles = tw({
  container: `
    absolute right-3 top-3 z-100
    flex justify-center items-end
    p-2

    motion-safe:duration-300
  `,
  nudge: `
    right-4
  `,
});
