import { Article, Layout } from '@/layout';
import type { Collection, Image } from '@/types';
import { getRoute, padIndex, trimCardinal } from '@/utils';

import Header from './header';
import Images from './images';
import Map from './map';
import { styles } from './stylesheet';

type Props = {
  data: {
    collection: Collection;
    images: Image[];
    index: number;
  };
};

export default function View({ data }: Props) {
  return (
    <>
      <Layout.Header />
      <Layout.Main>
        <div className={styles.container}>
          <span className={styles.when}>
            <span className={styles.start}>{data.collection.when[0]}</span>
            <span className={styles.timeline}></span>
            <span>{data.collection.when[1]}</span>
          </span>
          <h2 className={styles.heading}>
            {data.collection.title.map((chunk) => (
              <span className={styles.emphasis} key={chunk}>{chunk}</span>
            ))}
          </h2>
          <span className={styles.index}>
            {padIndex(data.index + 1)} / 20
          </span>
          <span className={styles.coordinates}>
            {data.collection.coordinates}
          </span>
          <span className={styles.location}>
            <span className={styles.emphasis}>{data.collection.location.region}</span>
            <span>{data.collection.location.country}, {trimCardinal(data.collection.location.continent)}</span>
          </span>
          <p className={styles.paragraph}>
            {data.collection.notes.map((paragraph) => (
              <span className={styles.remaining} key={paragraph}>{paragraph}</span>
            ))}
          </p>
        </div>
        <span className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-10 bg-(--foreground)/50" />
        <span className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-px w-10 bg-(--foreground)/50" />
        <Map collection={data.collection} />
      </Layout.Main>
    </>
  );
}
