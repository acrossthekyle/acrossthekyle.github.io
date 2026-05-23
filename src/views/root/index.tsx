import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import type { Collection } from '@/types';
import { Ui } from '@/ui';
import { padIndex, trimCardinal } from '@/utils';

import Cell from './cell';
import styles from './stylesheet';

type Props = {
  data: {
    collections: Array<Collection[]>;
  };
};

export default function View({ data }: Props) {
  let globalIndex = 0;

  return (
    <>
      {data.collections.map((chunk, parent) => (
        <ul className={styles.grid} key={parent}>
          {chunk.map((collection, index) => {
            globalIndex++;

            const isPreview = collection.count === 0;

            return (
              <Cell
                href={`/${collection.id}`}
                index={index}
                isPreview={isPreview}
                key={collection.id}
                parent={parent}
              >
                <p className={styles.location}>
                  {isPreview ? (
                    <>
                      Coming Soon, {collection.year}
                    </>
                  ) : (
                    <>
                      {collection.category}, {trimCardinal(collection.location.continent)}
                    </>
                  )}
                </p>
                <span className={styles.index}>
                  {padIndex(globalIndex)}
                </span>
                <h2 className={styles.title}>
                  {collection.title.map((chunk, part) => (
                    <span className={styles.chunk} key={chunk}>
                      {chunk}
                      {!isPreview && part === 0 && (
                        <span className={styles.count}>({collection.count})</span>
                      )}
                    </span>
                  ))}
                </h2>
                {!isPreview && (
                  <ArrowUpRight aria-hidden="true" className={styles.icon} />
                )}
              </Cell>
            );
          })}
        </ul>
      ))}
    </>
  );
}
