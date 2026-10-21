'use client';

import tw from '@/styles';

type Props = {
  isExpanded: boolean;
  onClick: () => void;
};

export default function Anchor({
  children,
  isExpanded,
  onClick,
}: React.PropsWithChildren<Props>) {
  return (
    <button
      aria-label="expand image"
      className={
        [
          styles.container,
          !isExpanded && styles.fit,
          isExpanded && styles.fill,
        ].filter(Boolean).join(' ')}
      disabled={isExpanded}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};

const styles = tw({
  container: `
    group
    text-left

    disabled:!cursor-default
  `,
  fit: `
    absolute inset-0 z-0
  `,
  fill: `
    w-full h-full
    px-4

    landscape-constrained:px-0

    md:px-12
    lg:px-24
  `,
});
