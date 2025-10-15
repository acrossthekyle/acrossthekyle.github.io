'use client';

import { use } from 'react';

import { Article } from '@/ui/article';
import type { Stats, Termini } from '@/types';

import Route from './route';
import Statistics from './stats';
import Toggle from './toggle';
import styles from './stylesheet';

type Post = {
  date?: string;
  description?: string[];
  hasRoute: boolean;
  hasStats: boolean;
  readingTime?: string;
  route: [number, number][];
  stats: Stats;
  termini: Termini;
  title?: string;
}

type Props = {
  post: Promise<Post>;
  slug: string;
  stage: string;
};

export default function View({ post, slug, stage }: Props) {
  const data = use(post);

  if (!data) {
    return (
      <dialog className={styles.container} open>
        <Toggle slug={slug} />
        <Article className={styles.article}>
          <header className={styles.header}>
            <h1 className={styles.heading}>
              <span className={styles.lid}>
                {stage}.
              </span>
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
    hasRoute,
    hasStats,
    readingTime,
    route,
    stats,
    termini,
    title,
  } = data;

  return (
    <dialog className={styles.container} open>
      <Toggle slug={slug} />
      <Article className={styles.article}>
        {title && date && (
          <header className={styles.header}>
            <h1 className={styles.heading}>
              <span className={styles.lid}>
                {stage}.
              </span>
              {title}
              <span className={styles.time}>
                {date}
                {readingTime && (
                  <> • {readingTime} min read</>
                )}
              </span>
            </h1>
          </header>
        )}
        {hasStats && (
          <Statistics stats={stats} termini={termini} />
        )}
        {hasRoute && (
          <Route route={route} termini={termini} />
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
