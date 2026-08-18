import { MoveRight } from 'lucide-react';
import Link from 'next/link';

import tw from '@/styles';
import type { Collection } from '@/types';

type Props = {
  latest: Collection;
};

export default function Updates({ latest }: Props) {
  return (
    <section aria-label="updates" className={styles.container}>
      <Link
        className={styles.link}
        href={`/travels/${latest.id}`}
      >
        <span className={styles.status} />
        <span className={styles.prefix}>Latest:</span>
        <span>{latest.title.join(' ')}</span>
        <MoveRight className={styles.icon} />
      </Link>
    </section>
  );
};

const styles = tw({
  container: `
    px-6 py-2
    border-t border-current/12.5
  `,
  link: `
    flex items-center gap-2
    text-tiny
    uppercase

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
