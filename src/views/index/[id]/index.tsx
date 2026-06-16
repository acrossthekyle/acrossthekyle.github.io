'use client';

import { InView } from 'react-intersection-observer';

import { Layout } from '@/layout';
import type { Collection, Image } from '@/types';
import { Ui } from '@/ui';
import { createDescription } from '@/utils';

import Map from './map';
import { styles } from './stylesheet';

type Props = {
  data: {
    images: Image[];
    collection: Collection;
  };
};

export default function View({ data }: Props) {
  return (
    <Layout.Main>
      <article className={styles.container}>
        <div className={styles.sidebar}>
          <header>
            <h1 className={styles.title}>
              {data.collection.title.map((chunk) => (
                <span key={chunk}>{chunk}</span>
              ))}
              <span>&mdash;</span>
              <p className={styles.description}>
                {createDescription(data.collection)} from {data.collection.when.long[0]} &mdash; {data.collection.when.long[1]}.
              </p>
            </h1>
          </header>
          <aside className={styles.aside}>
            <div className={styles.divider} />
            <section aria-hidden="true" className={styles.section}>
              <span className={styles.location}>
                <span>{data.collection.location.region}</span>
                <span>{data.collection.location.country}</span>
              </span>
              <span className={styles.coordinates}>
                {data.collection.coordinates}
              </span>
              <Map collection={data.collection} />
            </section>
            <div className={styles.divider} />
            <section aria-label="overview" className={`${styles.section} ${styles.padded}`}>
              {data.collection.notes.map((note) => (
                <p className={styles.paragraph} key={note}>{note}</p>
              ))}
            </section>
          </aside>
        </div>
        <ul className={styles.content}>
          {data.images.map((image) => (
            <InView key={image.id} threshold={0.625}>
              {({ inView, ref }) => (
                <li className={styles.item} key={image.id} ref={ref}>
                  <Ui.Image
                    className={styles.image(inView)}
                    size="large"
                    src={image.src}
                    thumb={image.thumb}
                  />
                </li>
              )}
            </InView>
          ))}
        </ul>
      </article>
    </Layout.Main>
  );
}
