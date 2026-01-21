'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';

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
      className={styles.nav}
    >
      {previous !== undefined && (
        <button
          className={styles.item}
          onClick={() => handleOnNavigate(`/experiences/${slug}/${previous.index}`)}
          type="button"
        >
          <ArrowLeft className={styles.icon} /> Prev
        </button>
      )}
      {next !== undefined && (
        <button
          className={styles.item}
          onClick={() => handleOnNavigate(`/experiences/${slug}/${next.index}`)}
          type="button"
        >
          Next <ArrowRight className={styles.icon} />
        </button>
      )}
    </nav>
  );
}
