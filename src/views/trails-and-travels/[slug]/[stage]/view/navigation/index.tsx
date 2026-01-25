'use client';

import { LinkItalic } from '@/ui/link';
import type { Navigation } from '@/types';

import { useModel } from './model';
import styles from './stylesheet';

type Props = {
  next?: Navigation;
  slug: string;
};

export default function Navigation({ next, slug }: Props) {
  const { handleOnNavigate } = useModel();

  return (
    <nav
      aria-label="next previous supplementary navigation"
      className={styles.nav(true)}
    >
      {next === undefined && (
        <LinkItalic
          asButton
          onClick={() => handleOnNavigate(`/trails-and-travels/${slug}`)}
        >
          <span className={styles.eyebrow}>The end</span>
          <strong>
            Back to summary
          </strong>
        </LinkItalic>
      )}
      {next !== undefined && (
        <LinkItalic
          asButton
          onClick={() => handleOnNavigate(`/trails-and-travels/${slug}/${next.index}`)}
        >
          <span className={styles.eyebrow}>Next</span>
          <strong>
            {next.label} {next.index}: {next.title.join(' ')}
          </strong>
        </LinkItalic>
      )}
    </nav>
  );
}
