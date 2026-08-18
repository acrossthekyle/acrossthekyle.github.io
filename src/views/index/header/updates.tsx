'use client';

import { MoveLeft, MoveRight, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import tw from '@/styles';
import type { Collection } from '@/types';
import { pad } from '@/utils';

type Props = {
  latest: Collection;
};

export default function Updates({ latest }: Props) {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((previous) => previous === 2 ? 0 : previous + 1);
  };

  const handlePrevious = () => {
    setCurrent((previous) => previous === 0 ? 2 : previous - 1);
  };

  return (
    <section aria-label="updates" className={styles.container}>
      <ul className={styles.items}>
        <li>
          <Link
            className={styles.item(current === 0)}
            href={`/travels/${latest.id}`}
          >
            <span className={`${styles.status} ${styles.green}`} />
            <span className={styles.prefix}>Latest:</span>
            <span>{latest.title.join(' ')}</span>
            <MoveRight className={styles.icon} />
          </Link>
        </li>
        <li>
          <Link
            className={styles.item(current === 1)}
            href="https://linkedin.com/in/acrossthekyle?ref=acrossthekyle.com"
            target="_blank"
          >
            <span className={styles.status} />
            <span>Currently <span className={styles.prefix}>@</span> Optum</span>
            <ArrowUpRight className={styles.icon} />
          </Link>
        </li>
        <li className={styles.item(current === 2)}>
          <span className={`${styles.status} ${styles.orange}`} />
          <span className={styles.prefix}>Upcoming:</span>
          <span>TBD</span>
        </li>
      </ul>
      <nav aria-label="supplementary navigation" className={styles.navigation}>
        <span className={styles.current}>{pad(current + 1)}/03</span>
        <button
          className={styles.navigate}
          onClick={handlePrevious}
          type="button"
        >
          <MoveLeft className={styles.icon} />
        </button>
        <button
          className={styles.navigate}
          onClick={handleNext}
          type="button"
        >
          <MoveRight className={styles.icon} />
        </button>
      </nav>
    </section>
  );
};

const styles = tw({
  container: `
    flex justify-between gap-0
    pl-6 py-1 pr-4
    text-tiny
    uppercase
    border-t border-current/12.5

    sm:text-xtiny
  `,
  items: `
    flex-2
    relative
  `,
  item: (isActive: boolean) => tw(`
    absolute inset-0
    flex items-center gap-2
    bg-(--background)

    motion-safe:duration-300

    ${isActive ? 'opacity-100 z-1' : `
      opacity-0 z-0

      delay-0 invisible transition-[visibility] delay-300
    `}
  `),
  status: `
    w-2 h-2
    rounded-full
    border border-current/25
  `,
  green: `
    bg-green-500
  `,
  orange: `
    bg-orange-300
  `,
  prefix: `
    text-current/75
  `,
  icon: `
    w-3
    stroke-1
  `,
  navigation: `
    flex-1
    flex items-center justify-end
  `,
  current: `
    block
    mr-2
    tracking-widest
  `,
  navigate: `
    p-2
  `,
})
