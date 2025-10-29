import Link from 'next/link';

import type { Navigation } from '@/types';

import styles from './stylesheet';

type Props = {
  label?: string;
  next?: Navigation;
  previous?: Navigation;
  slug: string;
};

export default function Footer({ label, next, previous, slug }: Props) {
  return (
    <footer className={styles.footer}>
      <div className={styles.half}>
        {previous ? (
          <Link
            className={styles.link}
            href={`/wanderings/${slug}/${previous.index}`}
            replace
          >
            <h3 className={styles.title}>
              <span className={styles.eyebrow}>
                Previous: {label} {previous.index}
              </span>
              {previous.title.map((word, index) => (
                <span className="block" key={index}>{word}</span>
              ))}
            </h3>
          </Link>
        ) : (<div aria-hidden="true" className={styles.link} />)}
      </div>
      <div className={styles.half}>
        {next ? (
          <Link
            className={styles.link}
            href={`/wanderings/${slug}/${next.index}`}
            replace
          >
            <h3 className={styles.title}>
              <span className={styles.eyebrow}>
                Next: {label} {next.index}
              </span>
              {next.title.map((word, index) => (
                <span className="block" key={index}>{word}</span>
              ))}
            </h3>
          </Link>
        ) : (<div aria-hidden="true" className={styles.link} />)}
      </div>
    </footer>
  );
}
