'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

import type { Collection } from '@/types';
import { Ui } from '@/ui';
import { padIndex } from '@/utils';

import { styles } from './stylesheet';

type Props = {
  data: {
    collections: Collection[];
  };
};

export default function View({ data }: Props) {
  const [cover, setCover] = useState<{ src: string; thumb: string | null; } | null>(null);
  const [dimmable, setDimmable] = useState(false);
  const [filter, setFilter] = useState<string | null>(null);

  const [ref, isInView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const handleOnFilter = (value: string) => {
    setFilter(value === filter ? null : value);
  };

  return (
    <main>
      <article className={styles.container} ref={ref}>
        <header className={styles.header}>
          <h1 className={styles.title(isInView)}>
            Hi, my name is <span className={styles.emphasis}>Kyle</span> <span className={styles.thin}>&mdash;</span> an inspired <span className={styles.emphasis}>backpacking </span> and <span className={styles.emphasis}>travel </span> enthusiast living a city-based life in <span className={styles.emphasis}>Chicago </span> crafting digital <span className={styles.emphasis}>experiences.</span>
          </h1>
          <section className={styles.content}>
            <p className={styles.paragraph}>
              Over the last <span>{new Date().getFullYear() - 2018} </span> years I've spent hundreds of days traipsing thousands of miles through forests, over mountain passes/summits, and across entire countries, always seeking the next adventure &mdash; from the heights of the Himalayas in Nepal, to the rainy shores of Scotland, the windswept expanses of Patagonia, and the deserts of Egypt.
            </p>
            <ul className={styles.socials}>
              <li className={styles.outbound}>
                <span>
                  Questions? Send me an
                </span>
                <Link
                  className={styles.social}
                  href="mailto:hello@acrossthekyle.com"
                >
                  E-mail
                </Link>
              </li>
              <li className={styles.outbound}>
                <span>
                  Latest updates? Follow me on
                </span>
                <Link
                  className={styles.social}
                  href="https://instagram.com/acrossthekyle?ref=acrossthekyle.com"
                  target="_blank"
                >
                  Instagram
                </Link>
              </li>
            </ul>
          </section>
        </header>
        <section className={styles.travels}>
          <h2 className={styles.heading}>
            Travels
          </h2>
          <nav aria-label="filters">
            <ul className={styles.filters}>
              <li>
                <button
                  className={styles.filter}
                  data-active={filter === null ? 'yes' : undefined}
                  onClick={() => setFilter(null)}
                  type="button"
                >
                  [{filter === null ? 'x' : ' '}] All
                </button>
              </li>
              <li>
                <button
                  className={styles.filter}
                  data-active={filter === 'destination' ? 'yes' : undefined}
                  onClick={() => handleOnFilter('destination')}
                  type="button"
                >
                  [{filter === 'destination' ? 'x' : ' '}] Destinations
                </button>
              </li>
              <li>
                <button
                  className={styles.filter}
                  data-active={filter === 'backpacking' ? 'yes' : undefined}
                  onClick={() => handleOnFilter('backpacking')}
                  type="button"
                >
                  [{filter === 'backpacking' ? 'x' : ' '}] Backpacking
                </button>
              </li>
              <li>
                <button
                  className={styles.filter}
                  data-active={filter === 'summits' ? 'yes' : undefined}
                  onClick={() => handleOnFilter('summits')}
                  type="button"
                >
                  [{filter === 'summits' ? 'x' : ' '}] Summits
                </button>
              </li>
            </ul>
          </nav>
          {cover !== null && (
            <figure className={styles.figure}>
              <Ui.Image
                className={styles.image}
                src={cover.src}
                thumb={cover.thumb || ''}
              />
            </figure>
          )}
          <ul className={styles.items(isInView)}>
            {data.collections.map((collection, index) => (
              <li
                className={styles.item}
                onMouseEnter={() => setDimmable(true)}
                onMouseLeave={() => setDimmable(false)}
                key={collection.id}
              >
                <Link
                  className={`${styles.link} ${index % 2 === 0 ? styles.serif : ''}`}
                  data-dimmed={dimmable}
                  data-filtered={filter !== null ? collection.category.toLowerCase() === filter ? 'yes' : 'no' : 'none'}
                  href={`/travels/${collection.id}`}
                  onMouseEnter={() => setCover(collection.cover)}
                  onMouseLeave={() => setCover(null)}
                >
                  {collection.title.join(' ')}
                  <span className={styles.count}>
                    ( {padIndex(collection.count)} )
                  </span>
                  <span className={styles.info}>
                    <span>
                      {collection.location.region}, {collection.location.country}
                    </span>
                    <span className={styles.when}>
                      {collection.when.long[0]} &mdash; {collection.when.long[1]}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <p className={styles.paragraph}>
          Between travels I get lost in anything that engages critical thinking while moonlighting as a Web Developer with an endless thrill for coding, even after a <Link
              href="https://linkedin.com/in/acrossthekyle?ref=acrossthekyle.com"
              target="_blank"
            >
              <u>career</u>
            </Link> of {new Date().getFullYear() - 2011} years.
        </p>
      </article>
    </main>
  );
}
