'use client';

import FocusLock from 'react-focus-lock';

import { useGpx } from '@/hooks/useGpx';
import { Article } from '@/ui/article';

import Description from './description';
import Footer from './footer';
import Header from './header';
import { useModel } from './model';
import styles from './stylesheet';
import Toggle from './toggle';
import type { Data } from './types';

type Props = {
  data: Data | null;
};

export default function View({ data }: Props) {
  useModel();

  const { openGpx } = useGpx();

  const handleOnStatsClick = () => {
    if (data !== null) {
      openGpx(data.gpx, data.stats, data.termini);
    }
  };

  if (data === null) {
    return (
      <div
        aria-label="not found"
        aria-modal="true"
        className={styles.container}
        role="dialog"
        tabIndex={-1}
      >
        <FocusLock className={styles.lock}>
          <Toggle />
          <Article className={styles.article}>
            <Header
              eyebrow="404"
              title={['Not Found']}
            />
          </Article>
        </FocusLock>
      </div>
    );
  }

  return (
    <div
      aria-label={`${data.title.join(' ')} details`}
      aria-modal="true"
      className={styles.container}
      id="dialog"
      role="dialog"
      tabIndex={-1}
    >
      <FocusLock className={styles.lock}>
        <Toggle />
        <Article className={styles.article}>
          <Header
            eyebrow={data.date}
            hasStats={data.hasStats}
            hero={data.image}
            onStatsClick={handleOnStatsClick}
            title={data.title}
          />
          {data.description.length > 0 && (
            <>
              <Description description={data.description} />
              <Footer />
            </>
          )}
        </Article>
      </FocusLock>
    </div>
  );
}
