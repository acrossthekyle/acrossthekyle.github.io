import type { Collection } from '@/types';
import { createDescription } from '@/utils';

import { styles } from './stylesheet';

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
        <span>&mdash;</span>
        {collection.title.map((chunk) => (
          <span className={styles.words} key={chunk}>{chunk}</span>
        ))}
        <span className={styles.lid}>{createDescription(collection)}</span>
      </h1>
      <div className={styles.overview}>
        {collection.notes.map((paragraph, index) => (
          <p
            className={styles.paragraph}
            key={paragraph}
            style={{
              animationDelay: `${index * 0.125}s`,
            }}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </>
  );
}
