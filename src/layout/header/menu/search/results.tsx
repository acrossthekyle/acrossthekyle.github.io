'use client';

import Link from 'next/link';
import { RefObject } from 'react';

import tw from '@/styles';
import type { Collection } from '@/types';

type Props = {
  isExpanded: boolean;
  onClick: () => void;
  ref: RefObject<HTMLUListElement | null>;
  results: Collection[];
};

export default function Results({ isExpanded, onClick, ref, results }: Props) {
  return (
    <nav aria-label="search results">
      <ul
        className={styles.items(isExpanded)}
        id="search-results"
        ref={ref}
      >
        {results.map((item) => {
          return (
            <li className={styles.item} key={item.id}>
              <Link
                className={styles.link}
                href={`/travels/${item.id}`}
                onClick={onClick}
              >
                <span className={styles.title}>
                  {item.title.join(' ')}
                  <span
                    aria-label={`undertaken in ${item.year}`}
                    className={styles.year}
                  >
                    ({item.year})
                  </span>
                </span>
                <span className={styles.tag}>{item.category}</span>
                <span className={styles.location}>
                  <span>{item.location.region}</span>
                  <span aria-hidden="true">&mdash;</span>
                  <span className={styles.emphasis}>
                    {item.location.country}
                  </span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

const styles = tw({
  items: (isExpanded: boolean) => tw(`
    flex flex-col gap-0
    overflow-hidden
    mx-6 mt-4
    pt-2

    ${isExpanded ? 'h-auto' : `
      h-[calc(100svh-12rem)]

      sm:h-[calc(100svh-11.5rem)]
    `}
  `),
  item: `
    pb-4
    border-l border-current/22.5

    last:pb-0
  `,
  link: `
    relative
    flex flex-col gap-1
    pl-6
    text-base

    before:absolute
    before:-inset-1
    before:left-4
    before:rounded-sm
    before:bg-(--foreground)/5
    before:opacity-0
    motion-safe:before:duration-300

    hover:before:opacity-100

    sm:text-sm
    lg:text-xs
  `,
  title: `
    flex items-center gap-2
    font-black

    sm:items-end
  `,
  year: `
    font-normal
    text-sm text-current/50

    sm:text-xs
    lg:text-tiny
  `,
  tag: `
    relative -left-0.5
    self-start
    text-xs
    rounded-sm
    border border-current/12.5
    p-1 py-0.25

    sm:text-tiny
  `,
  location: `
    flex flex-wrap gap-1
    text-sm

    sm:text-xs
  `,
  emphasis: `
    font-serif italic
  `,
});
