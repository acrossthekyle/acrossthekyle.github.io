'use client';

import { use } from 'react';

import { Article } from '@/ui/article';

import Toggle from './toggle';
import styles from './stylesheet';

type Post = {
  date?: string;
  description?: string[];
  title?: string;
}

type Props = {
  post: Promise<Post>;
  slug: string;
};

export default function View({ post, slug }: Props) {
  const { date, description, title } = use(post);

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
              </h1>
            </header>
          )}
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
