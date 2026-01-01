'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import {
  Image,
  ImageCaption,
  ImageCaptionCount,
  ImageCaptionEyebrow,
  ImageCaptionMeta,
  ImageCaptionText,
  ImageFigure,
  ImageLink,
} from '@/ui/image';
import { padIndex } from '@/utils';

import Filters from './filters';
import { useModel } from './model';
import styles from './stylesheet';
import type { Data } from './types';

type Props = {
  data: Data[];
};

export default function View({ data }: Props) {
  const { handleOnFilter, items } = useModel(data);

  return (
    <section aria-label="timeline" className={styles.container}>
      <Filters data={data} onChange={handleOnFilter} />
      {items.map((item, index: number) => (
        <article className={styles.article} key={index}>
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
              <ImageLink
                href={`/${item.slug}`}
                id={index === 0 ? 'first-article' : undefined}
              >
                <ImageCaptionCount>
                  {padIndex(item.index + 1)}
                </ImageCaptionCount>
                <ImageCaptionEyebrow>
                  {item.location}
                </ImageCaptionEyebrow>
                <ImageCaptionText>
                  {item.title.map((words) => (
                    <span className="block" key={words}>{words}</span>
                  ))}
                </ImageCaptionText>
                <ImageCaptionMeta>
                  {item.type}
                </ImageCaptionMeta>
              </ImageLink>
            </ImageCaption>
          </ImageFigure>
          {item.description.length > 0 && (
            <>
              <section aria-label="category and date" className={styles.meta}>
                <span>{item.category}</span> / <span>{item.date}</span>
              </section>
              <section aria-label="preview">
                <p className={styles.description}>
                  {item.description[0]}
                </p>
              </section>
            </>
          )}
          <footer className={styles.footer}>
            <Link className={styles.link} href={`/${item.slug}`}>
              Learn More
              <ArrowRight className={styles.icon} />
            </Link>
          </footer>
        </article>
      ))}
    </section>
  );
}
