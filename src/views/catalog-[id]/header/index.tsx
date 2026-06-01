import type { Collection } from '@/types';
import { createDescription } from '@/utils';

import styles from './stylesheet';

type Props = {
  collection: Collection;
};

export default function Header({ collection }: Props) {
  return (
    <>
      <h1 className={styles.title}>
        <span className={styles.eyebrow}>
          {collection.when.includes('+') && 'Since '}
          {collection.when.replace('+', '')}
        </span>
        <span className={styles.chunk}>&mdash;</span>
        {collection.title.map((chunk) => (
          <span className={styles.chunk} key={chunk}>{chunk}</span>
        ))}
        <span className={styles.lid}>{createDescription(collection)}</span>
      </h1>
      <div className={styles.overview}>
        {collection.notes.map((paragraph) => (
          <p className={styles.paragraph} key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </>
  );
}
