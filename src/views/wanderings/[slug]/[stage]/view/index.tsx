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
      <Toggle />
      <Article className={styles.article}>
        <Header
          date={data.date}
          stage={data.stage}
          title={data.title}
        />
        {data.hasStats && (
          <section>
            <div className="flex flex-col gap-3 base:flex-row base:gap-0">
                <div className="base:w-2/10 base:pr-2">
                <h2>Stats</h2>
              </div>
              <div className="base:w-8/10">
                <Statistics stats={data.stats} />
              </div>
            </div>
          </section>
        )}
        {data.hasRoute && data.hasElevation && (
          <Gpx>
            <section>
              <div className="flex flex-col gap-3 base:flex-row base:gap-0">
                <div className="base:w-2/10 base:pr-2">
                  <h2>Route</h2>
                </div>
                <div className="base:w-8/10">
                  <Route route={data.route} termini={data.termini} />
                </div>
              </div>
            </section>
            <section>
              <div className="flex flex-col gap-3 base:flex-row base:gap-0">
                <div className="base:w-2/10 base:pr-2">
                  <h2>Elevation</h2>
                </div>
                <div className="base:w-8/10">
                  <Elevation elevation={data.elevation} />
                </div>
              </div>
            </section>
          </Gpx>
        )}
        {data.description.length > 0 && (
          <section>
            <div className="flex flex-col gap-3 base:flex-row base:gap-0">
                <div className="base:w-2/10 base:pr-2">
                <h2>Overview</h2>
              </div>
              <div className="base:w-8/10">
                <Description description={data.description} />
              </div>
            </div>
          </section>
        )}
        <Footer
          label={data.label}
          next={data.next}
          previous={data.previous}
          slug={data.slug}
        />
      </Article>
    </dialog>
  );
}
