import Link from 'next/link';

import tw from '@/styles';

const DELAYS = [
  'motion-safe:delay-100',
  'motion-safe:delay-130',
  'motion-safe:delay-160',
  'motion-safe:delay-190',
  'motion-safe:delay-220',
];

type Props = {
  index: number;
  isActive: boolean;
  isExternal: boolean;
  onClick: () => void;
  url: string;
};

export default function Anchor({
  children,
  index,
  isActive,
  isExternal,
  onClick,
  url,
}: React.PropsWithChildren<Props>) {
  return (
    <Link
      className={styles.link(isActive, index)}
      onClick={onClick}
      href={url}
      target={isExternal ? '_blank' : '_self'}
    >
      {children}
    </Link>
  );
};

const styles = tw({
  link: (isActive: boolean, index: number) => tw(`
    relative
    flex items-center gap-2
    w-fit
    px-4 py-1
    text-xs
    uppercase
    tracking-wider
    border border-current/22.5
    bg-(--background)
    rounded-full
    pointer-events-auto
    ${isActive ? 'right-0 opacity-100' : 'right-20 opacity-0'}

    ${DELAYS[index]}
    motion-safe:duration-300

    hover:bg-(--foreground)/2.5
    hover:dark:bg-(--foreground)/5

    sm:text-tiny
    sm:px-3
    sm:py-0
    lg:delay-0
  `),
})
