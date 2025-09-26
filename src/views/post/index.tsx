'use client';

import { use } from 'react';

import { Article } from '@/ui/article';
import {
  Image,
  ImageFigure,
  ImageMaximize,
  ImageOptions,
  ImagePlaceholder,
  ImageRotateWarning,
  ImageSkeleton,
} from '@/ui/image';

import Toggle from './toggle';
import styles from './stylesheet';

type Post = {
  date?: string;
  description?: string[];
  image: string;
  readingTime?: string;
  title?: string;
}

type Props = {
  post: Promise<Post>;
  slug: string;
};

export default function View({ post, slug }: Props) {
  const { date, description, image, readingTime, title } = use(post);

  return (
    <>
      <div className={styles.backdrop} />
      <dialog className={styles.container}>
        <Toggle slug={slug} />
        <Article className={styles.article}>
          {title && date && (
            <header className={styles.header}>
              <h1 className={styles.heading}>
                {title}
                <span className={styles.lid}>{date}</span>
                <span className={styles.time}>{readingTime} min read</span>
              </h1>
            </header>
          )}
          <ImageFigure className={styles.figure}>
            <Image src={image}>
              <ImagePlaceholder>
                <ImageOptions
                  alt=""
                  colorize
                  height={1080}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  width={1920}
                />
                <ImageMaximize />
                <ImageRotateWarning />
                <ImageSkeleton />
              </ImagePlaceholder>
            </Image>
          </ImageFigure>
          <section className={styles.content}>
            {(description || []).map((paragraph, index) => (
              <p className={styles.paragraph} key={index}>{paragraph}</p>
            ))}
          </section>
        </Article>
      </dialog>
    </>
  );
}
