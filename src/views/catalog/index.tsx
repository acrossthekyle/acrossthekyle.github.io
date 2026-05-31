import Link from 'next/link';

import type { Collection } from '@/types';
import { padIndex, trimCardinal } from '@/utils';

import styles from './stylesheet';

type Props = {
  data: {
    collections: Collection[];
  };
};

export default function View({ data }: Props) {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {data.collections.map((collection, index) => (
          <li key={collection.id}>
            <Link className={styles.link} href={`/catalog/${collection.id}`}>
              <h2 className={styles.heading}>
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
        ))}
      </ul>
    </div>
  );
}
