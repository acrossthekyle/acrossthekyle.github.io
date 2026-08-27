import { MoveRight } from 'lucide-react';
import Link from 'next/link';

import tw from '@/styles';
import type { Travel } from '@/types';

type Props = {
  filterBy: string;
  travels: Travel[];
};

export default function Items({ filterBy, travels }: Props) {
  const sorted = [...travels]
    .sort((a, b) => Number(b.year) - Number(a.year))
    .filter(travel => {
      if (filterBy === 'all') {
        return true;
      }

      return travel.category.toLowerCase() === filterBy;
    });
  const grouped = Map.groupBy(sorted, item => item.year);
  const items = Array.from(grouped.entries());

  return (
    <ul>
      {items.map((item) => (
        <li className={styles.group} key={item[0]}>
          <h3 className={styles.year}>{item[0]}</h3>
          <ul className={styles.travels}>
            {item[1].map((travel) => (
              <li key={travel.id}>
                <Link className={styles.link} href={`/travels/${travel.id}`}>
                  <span className={styles.title}>{travel.title}</span>
                  <span className={styles.location}>
                    <span>{travel.region}</span>
                    <span className={styles.dash} aria-hidden="true">
                      &mdash;
                    </span>
                    <span className={styles.emphasis}>{travel.country}</span>
                  </span>
                  <span className={styles.category}>{travel.category}</span>
                  <MoveRight className={styles.icon} />
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

const styles = tw({
  group: `
    relative
    flex
    mb-4

    last:mb-0
  `,
  year: `
    sticky top-4 z-10
    self-start
    w-17.25
    pb-12 pt-0.75
    text-base
    font-extralight

    sm:pb-10
    sm:pt-0
    sm:text-sm
  `,
  travels: `
    flex flex-col gap-4
    w-full
  `,
  link: `
    group
    relative
    flex flex-col
    text-base

    before:absolute
    before:-inset-2
    before:rounded-sm
    before:bg-(--foreground)/5
    before:opacity-0
    motion-safe:before:duration-300

    hover:before:opacity-100

    sm:text-sm
  `,
  title: `
    font-black
  `,
  location: `
    pr-6
  `,
  dash: `
    mx-1
  `,
  category: `
    capitalize
    opacity-60 font-light
  `,
  emphasis: `
    font-serif italic
  `,
  icon: `
    absolute top-1/2 right-0.5
    -translate-y-1/2
    w-3 h-3
    stroke-1
    opacity-50

    motion-safe:duration-300

    lg:opacity-0

    group-hover:opacity-100
  `,
});
