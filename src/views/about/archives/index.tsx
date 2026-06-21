'use client';

import { MoveRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { InView } from 'react-intersection-observer';

import type { Collection } from '@/types';
import { Ui } from '@/ui';
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
        {/*<div className={styles.upper}>
          <h2 className={styles.header}>
            Index
            <span className={styles.footnote}>
              Selected wanderings
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
        </div>*/}
        <ul className={styles.container}>
          {collections.map((collection, index) => {
            return (
              <InView key={collection.id} threshold={0.1} triggerOnce={false}>
                {({ inView, ref }) => {
                  const isReversed = index % 2 !== 0 ? true : undefined;

                  return (
                      <li
                        className={styles.item}
                        data-inview={inView ? true : undefined}
                        id={`index-${index}`}
                        ref={ref}
                      >
                        <div className={styles.inner}>
                          <span className={styles.northwest} data-reverse={isReversed}>
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
                          </span>
                          <span className={styles.northeast} data-reverse={isReversed}>
                            <span className={styles.index}>
                              {padIndex(index + 1)} / {total}
                            </span>
                            <span className={styles.when}>
                              <span className={styles.start}>{collection.when.short[0]}</span>
                              <span className={styles.timeline}></span>
                              <span>{collection.when.short[1]}</span>
                            </span>
                          </span>
                          <span className={styles.southeast} data-reverse={isReversed}>
                            <span className={styles.region}>
                              {collection.location.region}
                            </span>
                            <span>
                              {collection.location.country}, {trimCardinal(collection.location.continent)}
                            </span>
                          </span>
                          <span className={styles.southwest} data-reverse={isReversed}>
                            {collection.coordinates.split(', ').map((coordinate) => (
                              <span key={coordinate}>{coordinate}</span>
                            ))}
                          </span>
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
