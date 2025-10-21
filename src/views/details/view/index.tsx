import { Article } from '@/ui/article';
import type { Stats, Termini } from '@/types';

import Gpx from './context';
import Description from './description';
import Elevation from './elevation';
import Route from './route';
import Statistics from './stats';
import styles from './stylesheet';
import Toggle from './toggle';

type Data = {
  date?: string;
  description: string[];
  elevation: string[] | null;
  hasElevation: boolean;
  hasRoute: boolean;
  hasStats: boolean;
  route: number[][] | null;
  slug: string;
  stage: string;
  stats: Stats;
  termini: Termini;
  title?: string;
};

type Props = {
  data: Data | null;
};

export default function View({ data }: Props) {
  if (data === null) {
    return (
      <dialog className={styles.container} open>
        <Toggle />
        <Article className={styles.article}>
          <header className={styles.header}>
            <h1 className={styles.title}>
              404 Not Found: Sorry, this does not exist.
            </h1>
          </header>
        </Article>
      </dialog>
    );
  }

  const {
    date,
    description,
    elevation,
    hasElevation,
    hasRoute,
    hasStats,
    route,
    slug,
    stage,
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
            <h1 className={styles.title}>
              <span className={styles.lid}>
                {stage}.
              </span>
              {title}
              <span className={styles.time}>
                {date}
              </span>
            </h1>
          </header>
        )}
        {hasStats && (
          <Statistics stats={stats} />
        )}
        <Gpx>
          {hasRoute && (
            <Route route={route} termini={termini} />
          )}
          {hasElevation && (
            <Elevation elevation={elevation} />
          )}
        </Gpx>
        <Description description={description} />
      </Article>
    </dialog>
  );
}
