'use client';

import { MoveRight } from 'lucide-react';
import { Fragment, useEffect } from 'react';
import { InView, useInView } from 'react-intersection-observer';

import type { Collection, Image } from '@/types';
import { Ui } from '@/ui';

import { styles } from './stylesheet';
import { createClasses } from './utils';

type Props = {
  data: {
    collection: Collection;
    images: Image[];
  };
};

export default function View({ data }: Props) {
  const [mainRef, isInView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  useEffect(() => {
    const handleWindowWheel = (event: WheelEvent) => {
      if (window.innerWidth <= 768) {
        return;
      }

      if (event.deltaY === 0) {
        return;
      }

      event.preventDefault();

      window.scrollBy({
        left: event.deltaY,
        behavior: 'auto',
      });
    };

    window.addEventListener('wheel', handleWindowWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWindowWheel);
    };
  }, []);

  return (
    <main ref={mainRef}>
      <article className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title(isInView)}>
            {data.collection.header.map((line, index) => (
              <span className={styles.line} key={index}>
                {line.map((chunk, key) => (
                  <Fragment key={`${index}-${key}`}>
                    {chunk.type === 'spacer' && (
                      <span className={styles.spacer} />
                    )}
                    {chunk.type === 'nbsp' && (
                      <>&nbsp;</>
                    )}
                    {chunk.type === 'text' && (
                      <span className={createClasses(styles, chunk.classes)}>
                        {chunk.words}
                      </span>
                    )}
                  </Fragment>
                ))}
              </span>
            ))}
          </h1>
        </header>
        <p className={styles.when(isInView)}>
          <span>{data.collection.when.long[0]}</span>
          <span>&ndash;</span>
          <span>{data.collection.when.long[1]}</span>
        </p>
        <p className={styles.where(isInView)}>
          {data.collection.title.join(' ')}, {data.collection.location.continent}
        </p>
        <MoveRight className={styles.hint} />
        <ul className={styles.items}>
          {data.images.map((image, index) => (
            <InView key={image.id} threshold={0.1} triggerOnce>
              {({ inView, ref }) => (
                <li className={styles.item(index, inView)} ref={ref}>
                  <figure className={styles.figure(index)}>
                    <Ui.Image
                      className={styles.image(index)}
                      src={image.src}
                      thumb={image.thumb}
                    />
                    <figcaption className={styles.caption(index)}>
                      <h2 className={styles.heading}>
                        <span className={styles.date}>{image.when.long[0]}</span>
                        <span className={styles.location}>{image.title || image.location.region}</span>
                        <span className={styles.country}>{image.location.country}</span>
                        <span className={styles.elevation}>
                          <Ui.Units.Length isSmall value={image.elevation} />
                        </span>
                      </h2>
                    </figcaption>
                  </figure>
                </li>
              )}
            </InView>
          ))}
          <li className={styles.buffer} role="presentation" />
        </ul>
      </article>
    </main>
  );
}
