import Link from 'next/link';

import tw from '@/styles';

const DELAYS = [
  'motion-safe:delay-100',
  'motion-safe:delay-130',
  'motion-safe:delay-160',
  'motion-safe:delay-190',
];

type Props = {
  index: number;
  isActive: boolean;
  onClick: () => void;
  url: string;
};

export default function Anchor({
  children,
  index,
  isActive,
  onClick,
  url,
}: React.PropsWithChildren<Props>) {
  return (
    <Link
      className={styles.link(isActive, index)}
      onClick={onClick}
      href={url}
    >
      {children}
    </Link>
  );
};

const styles = tw({
  link: (isActive: boolean, index: number) => tw(`
    group
    relative
    flex items-center
    w-fit
    ${isActive ? 'right-0 opacity-100' : 'right-20 opacity-0'}

    ${DELAYS[index]}
    motion-safe:duration-300
  `),
})
