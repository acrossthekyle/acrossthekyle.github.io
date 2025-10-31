'use client';

import { Article } from '@/ui/article';

// import Gpx from './context';
import Description from './description';
// import Elevation from './elevation';
import Footer from './footer';
import Header from './header';
import { useModel } from './model';
// import Route from './route';
import Section from './section';
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
      <dialog className={styles.container} id="dialog" open>
        <Toggle />
        <Article className={styles.article}>
          <Header
            date="404"
            title="Not Found"
          />
        </Article>
      </dialog>
    );
  }

  return (
    <dialog className={styles.container} id="dialog" open>
      <Toggle />
      <Article className={styles.article}>
        <Header
          date={data.date}
          title={data.title}
        />
        {data.hasStats && (
          <Section>
            <Statistics stats={data.stats} />
          </Section>
        )}
        {data.description.length > 0 && (
          <Section heading="Overview">
            <Description description={data.description} />
          </Section>
        )}
        {/*{data.hasRoute && data.hasElevation && (
          <Gpx>
            <Section heading="Route">
              <Route route={data.route} termini={data.termini} />
            </Section>
            <Section heading="Elevation">
              <Elevation elevation={data.elevation} />
            </Section>
          </Gpx>
        )}*/}
        {data.description.length > 0 && (
          <Footer />
        )}
      </Article>
    </dialog>
  );
}
