'use client';

import Link from 'next/link';

import {
  Image,
  ImageCaption,
  ImageCaptionCount,
  ImageFigure,
  ImageLink,
} from '@/ui/image';
import { padIndex } from '@/utils';

import Filters from './filters';
import { useModel } from './model';
import styles from './stylesheet';
import { type Data } from './types';

type Props = {
  data: Data[];
};

export default function View({ data }: Props) {
  const { handleOnFilter, items } = useModel(data);

  return (
    <section aria-label="timeline" className={styles.container}>
      <Filters onChange={handleOnFilter} />
      {items.map((item, index: number) => (
        <article className={styles.article} key={index}>
          <header className={styles.header}>
            <h2 className={styles.title}>
              <a className={styles.link} href={`/${item.slug}`}>#</a>
              {item.title.join(' ')}
            </h2>
            <h3 className={styles.date}>
              <span className={styles.prefix}>{item.type} from</span>
              <span className={styles.suffix}>{item.date}</span>
            </h3>
          </header>
          <ImageFigure>
            <Image
              alt=""
              height={1080}
              index={index}
              sizes="(max-width: 768px) 100vw, 50vw"
              src={item.image}
              width={1920}
            />
            <ImageCaption>
              <ImageLink href={`/${item.slug}`}>
                <ImageCaptionCount>
                  {padIndex(item.index + 1)}
                </ImageCaptionCount>
              </ImageLink>
            </ImageCaption>
          </ImageFigure>
          {item.description.length > 0 && (
            <section aria-label="preview">
              <p className={styles.description}>
                {item.description[0]}
              </p>
            </section>
          )}
          <footer className={styles.footer}>
            <p className={styles.count}>
              Located in <strong>{item.location}</strong>
            </p>
            <Link className={styles.view} href={`/${item.slug}`}>
              Browse {item.count} Posts
            </Link>
          </footer>
        </article>
      ))}
    </section>
  );
}
