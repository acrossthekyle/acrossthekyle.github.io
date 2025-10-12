'use client';

import { use } from 'react';

import { Article } from '@/ui/article';
import type { Stats } from '@/types';

import Route from './route';
import Statistics from './stats';
import Toggle from './toggle';
import styles from './stylesheet';

type Post = {
  date?: string;
  description?: string[];
  hasPost: boolean;
  hasRoute: boolean;
  hasStats: boolean;
  readingTime?: string;
  route: [number, number][];
  stats: Stats;
  title?: string;
}

type Props = {
  post: Promise<Post>;
  slug: string;
};

export default function View({ post, slug }: Props) {
  const data = use(post);

  if (!data) {
    return (
      <dialog className={styles.container} open>
        <Toggle slug={slug} />
        <Article className={styles.article}>
          <header className={styles.header}>
            <h1 className={styles.heading}>
              Not Found
              <span className={styles.lid}>404</span>
            </h1>
          </header>
          <section className={styles.content}>
            <p className={styles.paragraph}>
              Post does not exist.
            </p>
          </section>
        </Article>
      </dialog>
    );
  }

  const {
    date,
    description,
    hasPost,
    hasRoute,
    hasStats,
    readingTime,
    route,
    stats,
    title,
  } = data;

  return (
    <dialog className={styles.container} open>
      <Toggle slug={slug} />
      <Article className={styles.article}>
        {hasPost && title && date && (
          <header className={styles.header}>
            <h1 className={styles.heading}>
              <span className={styles.lid}>{date}</span>
              {title}
              {readingTime && (
                <span className={styles.time}>{readingTime} min read</span>
              )}
            </h1>
          </header>
        )}
        {hasStats && (
          <Statistics stats={stats} />
        )}
        {hasRoute && (
          <Route route={route} />
        )}
        <section className={styles.content}>
          {(description || []).map((paragraph, index) => (
            <p className={styles.paragraph} key={index}>{paragraph}</p>
          ))}
        </section>
      </Article>
    </dialog>
  );
}
