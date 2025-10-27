import Link from 'next/link';

import type { Navigation } from '@/types';

import styles from './stylesheet';

type Props = {
  next?: Navigation;
  previous?: Navigation;
  slug: string;
  type: string;
};

export default function Footer({ next, previous, slug, type }: Props) {
  return (
    <footer className={styles.footer}>
      {previous ? (
        <Link
          className={styles.link}
          href={`/blog/${type}/${slug}/${previous.index}`}
          replace
        >
          <h3 className={styles.title}>
            <span className={styles.lid}>
              Previous
            </span>
            {previous.title.map((word, index) => (
              <span className="block" key={index}>{word}</span>
            ))}
            <span className={styles.time}>
              {previous.date}
            </span>
          </h3>
        </Link>
      ) : (<div aria-hidden="true" className={styles.link} />)}
      {next ? (
        <Link
          className={styles.link}
          href={`/blog/${type}/${slug}/${next.index}`}
          replace
        >
          <h3 className={styles.title}>
            <span className={styles.lid}>
              Next
            </span>
            {next.title.map((word, index) => (
              <span className="block" key={index}>{word}</span>
            ))}
            <span className={styles.time}>
              {next.date}
            </span>
          </h3>
        </Link>
      ) : (<div aria-hidden="true" className={styles.link} />)}
    </footer>
  );
}
