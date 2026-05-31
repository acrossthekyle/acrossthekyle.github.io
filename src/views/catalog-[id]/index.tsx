import type { Collection, Data } from '@/types';
import { createDescription } from '@/utils';

import Gallery from './gallery';
import Map from './map';
import styles from './stylesheet';

type Props = {
  data: {
    collection: Collection;
    images: Array<Data[]>;
  };
};

export default function View({ data }: Props) {
  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          <span className={styles.eyebrow}>
            {data.collection.when.includes('+') && 'Since '}
            {data.collection.when.replace('+', '')}
          </span>
          <span className={styles.chunk}>&mdash;</span>
          {data.collection.title.map((chunk) => (
            <span className={styles.chunk} key={chunk}>{chunk}</span>
          ))}
          <span className={styles.lid}>{createDescription(data.collection)}</span>
        </h1>
        <div className={styles.overview}>
          {data.collection.notes.map((paragraph) => (
            <p className={styles.paragraph} key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </header>
      <div className={styles.content}>
        <Map
          coordinates={data.collection.coordinates}
          location={data.collection.location}
        />
      </div>
      <Gallery images={data.images} total={data.collection.count} />
    </article>
  );
}
