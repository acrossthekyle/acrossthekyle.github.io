'use client';

import { Article } from '@/ui/article';

import Gpx from './context';
import Description from './description';
import Elevation from './elevation';
import Footer from './footer';
import Header from './header';
import { useModel } from './model';
import Route from './route';
import Statistics from './stats';
import styles from './stylesheet';
import Toggle from './toggle';
import type { Data } from './types';

type Props = {
  data: Data | null;
};

export default function View({ data }: Props) {
  useModel(data);

  if (data === null) {
    return (
      <dialog className={styles.container} open>
        <Toggle />
        <Article className={styles.article}>
          <Header
            date="Sorry, this does not exist."
            stage="404"
            title="Not Found"
          />
        </Article>
      </dialog>
    );
  }

  return (
    <dialog className={styles.container} open>
      <Toggle slug={data.slug} />
      <Article className={styles.article}>
        <Header date={data.date} stage={data.stage} title={data.title} />
        {data.hasStats && (
          <Statistics stats={data.stats} />
        )}
        <Gpx>
          {data.hasRoute && (
            <Route route={data.route} termini={data.termini} />
          )}
          {data.hasElevation && (
            <Elevation elevation={data.elevation} />
          )}
        </Gpx>
        <Description description={data.description} />
        <Footer next={data.next} previous={data.previous} slug={data.slug} />
      </Article>
    </dialog>
  );
}
