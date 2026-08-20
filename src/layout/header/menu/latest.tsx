import { MoveRight } from 'lucide-react';
import Link from 'next/link';

import tw from '@/styles';
import type { Collection } from '@/types';

type Props = {
  latest: Collection;
  onClick: () => void;
};

export default function Latest({ latest, onClick }: Props) {
  return (
    <Link
      className={styles.link}
      href={`/travels/${latest.id}`}
      onClick={onClick}
    >
      <span className={styles.status} />
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
    ml-6
    text-tiny
    uppercase
    tracking-wider

    sm:text-xtiny
  `,
  status: `
    w-2 h-2
    rounded-full
    border border-current/25
    bg-green-500
  `,
  prefix: `
    text-current/75
  `,
  icon: `
    w-3
    stroke-1
  `,
})
