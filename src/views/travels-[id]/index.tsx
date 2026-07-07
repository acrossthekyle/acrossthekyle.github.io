'use client';

import { useRouter } from 'next/navigation';
import { InView } from 'react-intersection-observer';

import type { Collection, Image } from '@/types';
import { Ui } from '@/ui';

import { styles } from './stylesheet';

type Props = {
  data: {
    collection: Collection;
    images: Array<Image[]>;
  };
};

export default function View({ data }: Props) {
  const router = useRouter();

  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          {data.collection.title.map((chunk) => (
            <span className={styles.line} key={chunk}>{chunk}</span>
          ))}
        </h1>
        <p className={styles.phrase}>
          {data.collection.header.map((line, index) => (
            <span className={styles.row} key={index}>
              {line}
            </span>
          ))}
        </p>
        <figure className={styles.cover}>
          <Ui.Image
            src={data.collection.cover.src}
            thumb={data.collection.cover.thumb || ''}
          />
        </figure>
        <div className={styles.notes}>
          {data.collection.notes.map((note, index) => (
            <p className={styles.note} key={index}>
              {note}
            </p>
          ))}
        </div>
        <p className={styles.info}>
          <span className={styles.when}>{data.collection.when.long[0]} to {data.collection.when.long[1]}</span>
          <span className={styles.location}>
            {data.collection.location.region}, {data.collection.location.country} &mdash; {data.collection.location.continent}
          </span>
          <span className={styles.category}>
            {data.collection.category}
          </span>
        </p>
        <button className={styles.back} onClick={router.back} type="button">
          Back
        </button>
      </div>
      <section aria-label="images" className={styles.gallery}>
        {data.images.map((chunk, index) => (
          <div className={styles.chunk} key={index}>
            {chunk.map((image, key) => (
              <InView key={image.id} threshold={0.1} triggerOnce>
                {({ inView, ref }) => (
                  <div className={styles.outer(index, key, inView)} ref={ref}>
                    <figure className={styles.figure(index, key)}>
                      <div className={styles.inner}>
                        <Ui.Image
                          className={styles.image(index, key)}
                          src={image.src}
                          thumb={image.thumb}
                        />
                      </div>
                      <figcaption className={styles.caption}>
                        <span className={styles.eyebrow}>
                          {image.when.long[0]}
                        </span>
                        <span className={styles.label}>
                          {image.title || image.location.region}
                        </span>
                        <span className={styles.lid}>
                          {image.location.country}
                        </span>
                      </figcaption>
                    </figure>
                  </div>
                )}
              </InView>
            ))}
          </div>
        ))}
      </section>
    </main>
  );
}
