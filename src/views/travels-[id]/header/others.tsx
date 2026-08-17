import { MoveLeft, MoveRight } from 'lucide-react';
import Link from 'next/link';

import tw from '@/styles';
import type { Collection } from '@/types';

type Props = {
  next: Collection;
  previous: Collection;
};

export default function Others({ next, previous }: Props) {
  return (
    <nav aria-label="related travels" className={styles.container}>
      <ul className={styles.items}>
        <li>
          <Link
            className={styles.item}
            href={`/travels/${previous.id}`}
          >
            <MoveLeft className={styles.icon} />
            <span>
              {previous.title.join(' ')}
            </span>
          </Link>
        </li>
        <li>
          <Link
            className={styles.item}
            href={`/travels/${next.id}`}
          >
            <span>
              {next.title.join(' ')}
            </span>
            <MoveRight className={styles.icon} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = tw({
  container: `
    px-6 py-1
    text-tiny
    uppercase
    border-t border-current/12.5

    sm:text-xtiny
  `,
  items: `
    flex justify-between gap-0
    h-10
  `,
  item: `
    flex items-center gap-2
    py-2
  `,
  icon: `
    w-3
    stroke-1
  `,
})
