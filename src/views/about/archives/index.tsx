'use client';

import Link from 'next/link';
import { InView } from 'react-intersection-observer';

import type { Collection } from '@/types';
import { padIndex, trimCardinal } from '@/utils';

import { styles } from './stylesheet';

type Props = {
  collections: Collection[];
};

export default function Archives({ collections }: Props) {
  const total = collections.length;

  return (
    <>
      <div className={styles.divider} />
      <div className={styles.wrapper}>
        <div className={styles.upper}>
          <h2 className={styles.header}>
            Index
            <span className={styles.footnote}>
              Curated selection of experiences
            </span>
          </h2>
          <ul className={styles.filters}>
            <li className={styles.filter}>
              Recent <span className={styles.brackets}>[x]</span>
            </li>
            <li className={styles.filter}>
              Asc. <span className={styles.brackets}>[ ]</span>
            </li>
            <li className={styles.filter}>
              Desc. <span className={styles.brackets}>[ ]</span>
            </li>
          </ul>
        </div>
        <ul className={styles.container}>
          {collections.map((collection, index) => {
            return (
              <InView key={collection.id} threshold={0.25} triggerOnce>
                {({ inView, ref }) => (
                  <li className={styles.item(inView, index)} ref={ref}>
                    <Link className={styles.link} href={`index/${collection.id}`}>
                      <h2 className={styles.heading(index)}>
                        <span className={styles.index(index)}>
                          {padIndex(index + 1)} / {total}
                        </span>
                        {collection.title.map((chunk) => (
                          <span className={styles.chunk} key={chunk}>{chunk}</span>
                        ))}
                        <span className={styles.when(index)}>
                          <span className={styles.start}>{collection.when.short[0]}</span>
                          <span className={styles.timeline(index)}></span>
                          <span>{collection.when.short[1]}</span>
                        </span>
                      </h2>
                      <span className={styles.coordinates(index)}>
                        {collection.coordinates.split(', ').map((coordinate) => (
                          <span key={coordinate}>{coordinate}</span>
                        ))}
                      </span>
                      <span className={styles.location(index)}>
                        <span className={`${styles.emphasis} ${styles.address}`}>
                          {collection.location.region}
                        </span>
                        <span className={styles.address}>
                          {collection.location.country}, {trimCardinal(collection.location.continent)}
                        </span>
                      </span>
                      <span className={styles.hint(index)}>
                        <span className={styles.words(index)}>View Details</span>
                        <span className={styles.shaded} />
                      </span>
                    </Link>
                  </li>
                )}
              </InView>
            );
          })}
        </ul>
      </div>
    </>
  );
}
