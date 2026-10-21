'use client';

import { Maximize, Minimize } from 'lucide-react';

import tw from '@/styles';

type Props = {
  isActive: boolean;
  isExpanded: boolean;
  onClick: () => void;
};

export default function Expand({
  isActive,
  isExpanded,
  onClick,
}: Props) {
  return (
    <button
      className={
        [
          styles.container,
          isActive && styles.active,
          !isActive && styles.stale,
          isExpanded && styles.inset,
        ].filter(Boolean).join(' ')
      }
      onClick={onClick}
      title={`${isActive ? 'Minimize' : 'View'} fullscreen image`}
      type="button"
    >
      {isExpanded ? (
        <Minimize className={styles.icon} />
      ) : (
        <Maximize className={styles.icon} />
      )}
    </button>
  );
};

const styles = tw({
  container: `
    absolute bottom-4 right-4 z-10
    bg-black/50
    rounded-md
    p-2

    motion-safe:duration-300
    motion-safe:transition-[opacity,scale]

    hover:scale-110
  `,
  stale: `
    invisible
    opacity-0
  `,
  active: `
    delay-100
    opacity-100
  `,
  icon: `
    size-5
    stroke-1 stroke-white

    lg:size-4
  `,
  inset: `
    !right-1.5

    landscape-constrained:!right-4

    md:!right-9.5
    lg:!right-21.5
  `,
});
