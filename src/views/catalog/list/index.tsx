'use client';

import Link from 'next/link';
import { InView } from 'react-intersection-observer';

import type { Collection } from '@/types';
import { padIndex, trimCardinal } from '@/utils';

import styles from './stylesheet';

type Props = {
  collections: Collection[];
};

export default function List({ collections }: Props) {
  return (
    <ul className={styles.list}>
      {collections.map((collection, index) => (
        <InView threshold={0.25} key={collection.id}>
          {({ inView, ref }) => (
            <li ref={ref}>
              <Link
                className={styles.link}
                href={`/index/${collection.id}`}
              >
                <h2 className={styles.heading(inView)}>
                  <span className={styles.index}>{padIndex(index + 1)}</span>
                  {collection.title.join(' ')}
                </h2>
                <span className={styles.lid}>
                  {collection.location.region} &mdash; {trimCardinal(collection.location.country)}
                </span>
                <span className={styles.lid}>
                  {collection.coordinates}
                </span>
              </Link>
            </li>
          )}
        </InView>
      ))}
    </ul>
  );
}
