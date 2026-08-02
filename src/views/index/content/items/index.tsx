'use client';

import Link from 'next/link';
import { useState } from 'react';

import type { Collection } from '@/types';
import { pad } from '@/utils';

import { styles } from './stylesheet';

type Props = {
  filter: string;
  items: Collection[];
};

export default function Items({ filter, items }: Props) {
  const [hovered, setHovered] = useState<number | null>(null);

  const isHovering = hovered !== null;

  return (
    <ul className={styles.items}>
      {items.map((item, index) => {
        const isFiltered = filter === 'all' ? false : filter.includes(item.category.toLowerCase());
        const isHovered = hovered === index;

        return (
          <li
            className={styles.item(isHovering, filter !== 'all', isFiltered, isHovered)}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            key={item.id}
          >
            <Link className={styles.link(index)} href={`/travels/${item.id}`}>
              {item.title.join(' ')}
              <span
                aria-label={`number of photographs: ${item.count}`}
                className={styles.count}
              >
                ( ph. {pad(item.count)} )
              </span>
              <span className={styles.info}>
                <span>{item.location.region}, {item.location.country}</span>
                <span className={styles.when}>
                  {item.when.long[0]} &mdash; {item.when.long[1]}
                </span>
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
