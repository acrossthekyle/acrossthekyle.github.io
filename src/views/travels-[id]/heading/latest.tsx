import { MoveRight } from 'lucide-react';
import Link from 'next/link';

import tw from '@/styles';
import type { Collection } from '@/types';

type Props = {
  collection: Collection;
};

export default function Latest({ collection }: Props) {
  return (
    <Link
      className={styles.link}
      href={`/travels/tag/${collection.category.toLowerCase()}`}
    >
      <span className={styles.prefix}>Category:</span>
      <span>{collection.category}</span>
      <MoveRight className={styles.icon} />
    </Link>
  );
};

const styles = tw({
  link: `
    flex items-center gap-2
    px-2
    text-tiny
    uppercase
    tracking-wider
    border border-current/22.5
    rounded-xs

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
