'use client';

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
    <nav className={styles.nav(previous !== undefined)}>
      {previous !== undefined && (
        <button
          className={styles.first}
          onClick={() => handleOnNavigate(`/${slug}/${previous.index}`)}
          type="button"
        >
          <Title shrink>
            <Eyebrow>
              Previous
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
          onClick={() => handleOnNavigate(`/${slug}/${next.index}`)}
          type="button"
        >
          <Title shrink>
            <Eyebrow>
              Next
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
