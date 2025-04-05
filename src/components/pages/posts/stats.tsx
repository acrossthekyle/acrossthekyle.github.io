'use client';

import Constants from '@/constants';
import styles from '@/styles/components/pages/posts/stats.module.scss';

type Props = {
  gain?: string;
  garmin?: string;
  loss?: string;
  miles: string;
  steps: string;
};

function Stats({ gain, garmin, loss, miles, steps }: Props) {
  return (
    <>
      <div className={styles.stats}>
        <span className={styles.stat}>
          {new Intl.NumberFormat().format(Number(miles))}
          <span className={styles.label}>Miles</span>
        </span>
        <span className={styles.stat}>
          {new Intl.NumberFormat().format(Number(steps))}
          <span className={styles.label}>Steps</span>
        </span>
        {gain && (
          <span className={styles.stat}>
            {new Intl.NumberFormat().format(Number(gain))} ft
            <span className={styles.label}>Ascent</span>
          </span>
        )}
        {loss && (
          <span className={styles.stat}>
            {new Intl.NumberFormat().format(Number(loss))} ft
            <span className={styles.label}>Descent</span>
          </span>
        )}
      </div>
      {garmin && (
        <div className={styles.external}>
          <a
            className={styles.garmin}
            href={`${Constants.GARMIN_URL}${garmin}`}
            rel="noreferrer"
            target="_blank"
          >
            View route on Garmin.com
          </a>
        </div>
      )}
    </>
  );
}

export default Stats;
