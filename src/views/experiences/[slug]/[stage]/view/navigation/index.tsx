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
          onClick={() => handleOnNavigate(`/experiences/${slug}/${previous.index}`)}
          type="button"
        >
          <small>Previous</small>
          <strong>{previous.title.join(' ')}</strong>
        </button>
      )}
      {next !== undefined && (
        <button
          className={styles.last}
          onClick={() => handleOnNavigate(`/experiences/${slug}/${next.index}`)}
          type="button"
        >
          <small>Next</small>
          <small><strong>{next.title.join(' ')}</strong></small>
        </button>
      )}
    </nav>
  );
}
