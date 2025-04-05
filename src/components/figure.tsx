'use client';

import { ReactNode, useId, useState } from 'react';
import { InView } from 'react-intersection-observer';
import { truncate } from 'lodash';
import Link from 'next/link';

import styles from '@/styles/components/figure.module.scss';

import Image from './image';
import Tags from './tags';

type Props = {
  date?: string;
  image: string;
  price?: string;
  snippet?: string;
  tags?: string[];
  title: string;
  uri: string;
};

function Figure({ date, image, snippet, tags, title, uri }: Props) {
  const [hasEnteredView, setHasEnteredView] = useState(false);

  const uuid = useId();

  const handleOnInView = (inView: boolean) => {
    if (!hasEnteredView && inView) {
      setHasEnteredView(true);
    }
  };

  return (
    <InView onChange={handleOnInView} threshold={0.1}>
      {({ ref }) => (
        <figure className={styles.figure} data-in-view={hasEnteredView}>
          <Link
            aria-describedby={uuid}
            className={styles.image}
            href={uri}
            ref={ref}
          >
            <Image
              alt=""
              height={432}
              sizes="(max-width: 768px) 100vw, 33vw"
              src={image}
              width={768}
            />
          </Link>
          <figcaption className={styles.caption}>
            {tags && <Tags className={styles.tags} items={tags} />}
            <h2 id={uuid}>
              <Link className={styles.title} href={uri}>
                {title}
              </Link>
            </h2>
            {snippet && (
              <p className={styles.preview}>
                {truncate(snippet, { length: 156, separator: ' ' })}
                <a href={uri}>
                  <span aria-hidden="true">..</span>
                  <span>more</span>
                </a>
              </p>
            )}
            {date && (
              <div className={styles.context}>
                <Link
                  aria-label="About Kyle"
                  className={styles.author}
                  href="/me"
                >
                  <Image
                    alt=""
                    aria-hidden="true"
                    height={20}
                    quality={30}
                    sizes="5vw"
                    src="2024/06/28/defda5d6-f42b-4415-9e73-bdba4f19c8a5.jpeg"
                    width={20}
                  />
                </Link>
                <div className={styles.info}>
                  <span aria-hidden="true">Kyle Gilbert</span>
                  <span aria-hidden="true" className={styles.divider}>
                    •
                  </span>
                  <time>{date}</time>
                </div>
              </div>
            )}
          </figcaption>
        </figure>
      )}
    </InView>
  );
}

export default Figure;
