import { MoveRight } from 'lucide-react';
import Link from 'next/link';

import tw from '@/styles';
import type { Collection } from '@/types';

type Props = {
  latest: Collection;
};

export default function Latest({ latest }: Props) {
  return (
    <Link
      className={styles.link}
      href={`/travels/${latest.id}`}
    >
      <span className={styles.prefix}>Latest:</span>
      <span>{latest.title.join(' ')}</span>
      <MoveRight className={styles.icon} />
    </Link>
  );
};

const styles = tw({
  link: `
    relative
    flex items-center gap-2
    w-fit
    mt-6 px-2
    text-tiny
    uppercase
    tracking-wider
    border border-current/22.5
    rounded-md

    motion-safe:duration-300

    hover:bg-(--foreground)/5

    sm:text-xtiny
  `,
  prefix: `
    text-current/75
  `,
  icon: `
    w-3
    stroke-1
  `,
})
