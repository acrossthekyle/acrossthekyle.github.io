'use client';

import FocusLock from 'react-focus-lock';

import { Article } from '@/ui/article';
import type { Stats, Termini } from '@/types';

import Gpx from './context';
import Description from './description';
import Elevation from './elevation';
import Header from './header';
import Route from './route';
import Statistics from './stats';
import styles from './stylesheet';
import Toggle from './toggle';

type Data = {
  date: string;
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
  title: string;
};

type Props = {
  data: Data | null;
};

export default function View({ data }: Props) {
  if (data === null) {
    return (
      <dialog className={styles.container} open>
        <FocusLock>
          <Toggle />
          <Article className={styles.article}>
            <Header
              date="Sorry, this does not exist."
              stage="404"
              title="Not Found"
            />
          </Article>
        </FocusLock>
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
      <FocusLock>
        <Toggle slug={slug} />
        <Article className={styles.article}>
          <Header date={date} stage={stage} title={title} />
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
      </FocusLock>
    </dialog>
  );
}
