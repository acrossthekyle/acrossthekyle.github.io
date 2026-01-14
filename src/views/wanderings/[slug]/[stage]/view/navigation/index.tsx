'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';

import type { Navigation } from '@/types';
import { Eyebrow, Line, Title } from '@/ui/typography';

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
          onClick={() => handleOnNavigate(`/wanderings/${slug}/${previous.index}`)}
          type="button"
        >
          <Title shrink>
            <Eyebrow className={styles.left}>
              <ArrowLeft className={styles.icon} /> Previous
            </Eyebrow>
            {previous.title.map((words) => (
              <Line key={words}>{words}</Line>
            ))}
          </Title>
        </button>
      )}
      {next !== undefined && (
        <button
          className={styles.last}
          onClick={() => handleOnNavigate(`/wanderings/${slug}/${next.index}`)}
          type="button"
        >
          <Title shrink>
            <Eyebrow className={styles.right}>
              Next <ArrowRight className={styles.icon} />
            </Eyebrow>
            {next.title.map((words) => (
              <Line key={words}>{words}</Line>
            ))}
          </Title>
        </button>
      )}
    </nav>
  );
}
