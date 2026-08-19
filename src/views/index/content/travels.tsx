import Link from 'next/link';

import tw from '@/styles';
import type { Collection } from '@/types';

type Props = {
  collections: Collection[];
};

export default function Travels({ collections }: Props) {
  const sorted = [...collections].sort((a, b) => Number(b.year) - Number(a.year));
  const grouped = Map.groupBy(sorted, item => item.year);
  const items = Array.from(grouped.entries());

  return (
    <article className={styles.container} id="travels">
      <h2 className={styles.heading}>
        <span className={styles.index}>02</span>
        Travels
      </h2>
      <ul>
        {items.map((item) => (
          <li className={styles.group} key={item[0]}>
            <h3 className={styles.year}>{item[0]}</h3>
            <ul className={styles.collections}>
              {item[1].map((collection) => (
                <li key={collection.id}>
                  <Link
                    className={styles.link}
                    href={`/travels/${collection.id}`}
                  >
                    <span className={styles.title}>
                      {collection.title.join(' ')}
                    </span>
                    <span className={styles.tag}>{collection.category}</span>
                    <span className={styles.location}>
                      <span>{collection.location.region}</span>
                      &mdash;
                      <span className={styles.emphasis}>
                        {collection.location.country}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </article>
  );
};

const styles = tw({
  container: `
    p-6
    border-b border-current/12.5
  `,
  heading: `
    flex flex-row-reverse items-start justify-between
    mb-6
    uppercase
    font-black
    text-sm
    tracking-wide

    sm:text-xs
    lg:text-tiny
  `,
  index: `
    font-normal
    text-tiny text-current/50
  `,
  group: `
    relative
    flex
    mb-4

    last:mb-0
  `,
  year: `
    sticky top-4 z-10
    self-start
    w-16
    pb-13 pt-0.75
    text-sm

    sm:text-xs
    sm:pb-10.5
    sm:pt-0
  `,
  collections: `
    flex flex-col gap-4
    w-full
  `,
  link: `
    relative
    flex flex-col gap-1
    text-base

    before:absolute
    before:-inset-2
    before:rounded-sm
    before:bg-(--foreground)/5
    before:opacity-0
    motion-safe:before:duration-300

    hover:before:opacity-100

    sm:text-sm
    lg:text-xs
  `,
  title: `
    font-black
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
