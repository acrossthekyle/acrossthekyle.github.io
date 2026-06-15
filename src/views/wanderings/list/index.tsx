'use client';

import Link from 'next/link';
import { InView } from 'react-intersection-observer';

import type { Collection } from '@/types';
import Ui from '@/ui';
import { getRoute, padIndex, trimCardinal } from '@/utils';

import { styles } from './stylesheet';

type Props = {
  collections: Collection[];
};

export default function List({ collections }: Props) {
  const total = collections.length;

  const route = getRoute('archives');

  return (
    <>
      {collections.map((collection, index) => {
        return (
          <InView key={collection.id} threshold={0.25} triggerOnce>
            {({ inView, ref }) => (
              <div className={styles.item(inView, index)} ref={ref}>
                <Link className={styles.link} href={`${route.path}/${collection.id}`}>
                  <h2 className={styles.heading(index)}>
                    <span className={styles.index(index)}>
                      {padIndex(index + 1)} / {total}
                    </span>
                    {collection.title.map((chunk) => (
                      <span className={styles.chunk} key={chunk}>{chunk}</span>
                    ))}
                    <span className={styles.when(index)}>
                      <span className={styles.start}>{collection.when[0]}</span>
                      <span className={styles.timeline(index)}></span>
                      <span>{collection.when[1]}</span>
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
                </Link>
              </div>
            )}
          </InView>
        );
      })}
    </>
  );
}
