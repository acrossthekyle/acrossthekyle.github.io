'use client';

import FocusLock from 'react-focus-lock';

import { useGpx } from '@/hooks/useGpx';
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

  const { isOpen } = useGpx();

  if (isOpen) {
    return null;
  }

  if (data === null) {
    return (
      <div
        aria-modal="true"
        className={styles.container}
        role="dialog"
        tabIndex={-1}
      >
        <FocusLock className="h-full">
          <Toggle />
          <Article className={styles.article}>
            <Header
              date="404"
              title={['Not Found']}
            />
          </Article>
        </FocusLock>
      </div>
    );
  }

  return (
    <div
      aria-modal="true"
      className={styles.container}
      id="dialog"
      role="dialog"
      tabIndex={-1}
    >
      <FocusLock className="h-full">
        <Toggle />
        <Article className={styles.article}>
          <Header
            date={data.date}
            title={data.title}
          />
          {data.hasStats && (
            <Section>
              <Statistics
                gpx={data.gpx}
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
      </FocusLock>
    </div>
  );
}
