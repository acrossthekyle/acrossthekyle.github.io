'use client';

import tw from '@/styles';

type Props = {
  index: number;
  isExpanded: boolean;
  onClick: (index: number) => void;
};

export default function Anchor({
  children,
  index,
  isExpanded,
  onClick,
}: React.PropsWithChildren<Props>) {
  return (
    <button
      aria-label="expand image"
      className={styles.container(isExpanded)}
      onClick={() => onClick(index)}
      type="button"
    >
      {children}
    </button>
  );
};

const styles = tw({
  container: (isExpanded: boolean) => tw(`
    group
    absolute left-1/2 -translate-x-1/2
    overflow-hidden
    rounded-xs
    text-left

    ${isExpanded
      ? 'w-full h-61.75 z-1'
      : 'inset-0 w-full h-30 z-0'
    }
  `),
});
