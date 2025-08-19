'use client';

import { Slash } from 'lucide-react';
import Link from 'next/link';

import type { Filter } from '@/types';

import { useModel } from './model';
import styles from './stylesheet';

type Props = {
  current: string;
  filters: Filter[];
  isOnChild: boolean;
};

export default function Filters({ current, filters, isOnChild }: Props) {
  const { active } = useModel();

  return (
    <section className={styles.container(isOnChild)}>
      <ul className={styles.options}>
        <li className={styles.option}>
          <Link
            className={styles.filter(active === null)}
            href={current}
          >
            All
            <span className={styles.count}>
              ({filters.reduce((total, filter) => total + filter.count, 0)})
            </span>
          </Link>
          <Slash className={styles.slash} />
        </li>
        {filters.map((filter: Filter, index: number) => (
          <li className={styles.option} key={filter.filter}>
            <Link
              className={styles.filter(active === filter.filter)}
              href={`${current}?filter=${filter.filter}`}
            >
              {filter.name}
              <span className={styles.count}>
                ({String(filter.count).padStart(2, '0')})
              </span>
            </Link>
            {index !== filters.length - 1 && (
              <Slash className={styles.slash} />
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
