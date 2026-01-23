'use client';

import type { Navigation } from '@/types';

import { useModel } from './model';
import styles from './stylesheet';

type Props = {
  next?: Navigation;
  previous?: Navigation;
  slug: string;
};

export default function Navigation({ next, previous, slug }: Props) {
  const { handleOnNavigate } = useModel();

  return (
    <nav
      aria-label="next previous supplementary navigation"
      className={styles.nav(previous !== undefined)}
    >
      {previous !== undefined && (
        <button
          className={styles.first}
          onClick={() => handleOnNavigate(`/trails-and-travels/${slug}/${previous.index}`)}
          type="button"
        >
          <span className={styles.eyebrow}>Previous</span>
          <strong className={styles.title}>
            {previous.title.join(' ')}
          </strong>
        </button>
      )}
      {next !== undefined && (
        <button
          className={styles.last}
          onClick={() => handleOnNavigate(`/trails-and-travels/${slug}/${next.index}`)}
          type="button"
        >
          <span className={styles.eyebrow}>Next</span>
          <strong className={styles.title}>
            {next.title.join(' ')}
          </strong>
        </button>
      )}
    </nav>
  );
}
