'use client';

import { Article } from '@/ui/article';

import Description from './description';
import Footer from './footer';
import Header from './header';
import { useModel } from './model';
import Section from './section';
import Statistics from './stats';
import styles from './stylesheet';
import Toggle from './toggle';
import type { Data } from './types';

type Props = {
  data: Data | null;
};

export default function View({ data }: Props) {
  useModel();

  if (data === null) {
    return (
      <div
        aria-modal="true"
        className={styles.container}
        role="dialog"
      >
        <Toggle />
        <Article className={styles.article}>
          <Header
            date="404"
            title="Not Found"
          />
        </Article>
      </div>
    );
  }

  return (
    <div
      aria-modal="true"
      className={styles.container}
      id="dialog"
      role="dialog"
    >
      <Toggle />
      <Article className={styles.article}>
        <Header
          date={data.date}
          title={data.title}
        />
        {data.hasStats && (
          <Section>
            <Statistics
              elevation={data.elevation}
              route={data.route}
              stats={data.stats}
              termini={data.termini}
            />
          </Section>
        )}
        {data.description.length > 0 && (
          <Section heading="Overview">
            <Description description={data.description} />
          </Section>
        )}
        {data.description.length > 0 && (
          <Footer />
        )}
      </Article>
    </div>
  );
}
