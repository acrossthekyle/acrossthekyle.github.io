'use client';

import tw from '@/styles';

type Props = {
  isActive: boolean;
  isExpanded: boolean;
};

export default function Inner({
  children,
  isActive,
  isExpanded,
}: React.PropsWithChildren<Props>) {
  return (
    <div
      className={
        [
          styles.container,
          !isActive && styles.stale,
          isActive && !isExpanded && styles.active,
          isExpanded && styles.expanded,
        ].filter(Boolean).join(' ')
      }
    >
      {children}
    </div>
  );
};

const styles = tw({
  container: `
    left-1/2
    -translate-x-1/2
    w-full
    overflow-hidden
    rounded-xs
  `,
  stale: `
    absolute inset-0 z-0
    h-30
  `,
  active: `
    absolute z-1
    h-61.75
  `,
  expanded: `
    fixed !left-0 top-0 z-1000
    !translate-x-0
    h-full !w-svw

    before:absolute
    before:inset-0
    before:bg-(--background)
  `,
});
