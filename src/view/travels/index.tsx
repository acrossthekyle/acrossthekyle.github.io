'use client';

import Link from 'next/link';
import { InView } from 'react-intersection-observer';

import type { Collection } from '@/types';
import { padIndex, trimCardinal } from '@/utils';

import { styles } from './stylesheet';

type Props = {
  collections: Collection[];
};

export default function Travels({ collections }: Props) {
  const total = collections.length;

  return (
    <>
      <div className={styles.wrapper}>
        <ul className={styles.container}>
          {collections.map((collection, index) => {
            return (
              <InView key={collection.id} threshold={0.1} triggerOnce>
                {({ inView, ref }) => {
                  const isReversed = index % 2 !== 0 ? true : undefined;

                  return (
                    <li
                      className={styles.item}
                      data-inview={inView ? true : undefined}
                      ref={ref}
                    >
                      <div className={styles.inner}>
                        <div className={styles.northwest} data-reverse={isReversed}>
                          <h2 className={styles.heading}>
                            {collection.title.map((chunk) => (
                              <span className={styles.line} key={chunk}>{chunk}</span>
                            ))}
                          </h2>
                          <Link
                            className={styles.view}
                            data-reverse={isReversed}
                            href={`/index/${collection.id}`}
                          >
                            <span>View</span>
                            <span className={styles.bar} />
                          </Link>
                        </div>
                        <div
                          className={styles.northeast}
                          data-reverse={isReversed}
                        >
                          <span className={styles.index}>
                            {padIndex(index + 1)} / {total}
                          </span>
                          <span className={styles.when}>
                            <span className={styles.start}>{collection.when.short[0]}</span>
                            <span className={styles.timeline}></span>
                            <span>{collection.when.short[1]}</span>
                          </span>
                        </div>
                        <div
                          className={styles.southeast}
                          data-reverse={isReversed}
                        >
                          <span className={styles.region}>
                            {collection.location.region}
                          </span>
                          <span>
                            {collection.location.country}, {trimCardinal(collection.location.continent)}
                          </span>
                        </div>
                        <div
                          className={styles.southwest}
                          data-reverse={isReversed}
                        >
                          {collection.coordinates.split(', ').map((coordinate) => (
                            <span key={coordinate}>{coordinate}</span>
                          ))}
                        </div>
                        <span className={styles.cross} />
                      </div>
                    </li>
                  );
                }}
              </InView>
            );
          })}
        </ul>
      </div>
    </>
  );
}
