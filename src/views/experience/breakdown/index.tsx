import type { Data } from '@/types';
import { getDate } from '@/utils';

import styles from './stylesheet';

type Props = {
  data: Data;
};

export default function Breakdown({ data }: Props) {
  return (
    <>
      <section className={styles.section} aria-labelledby="overview">
        <h2 className={styles.heading} id="overview">
          <span className={styles.index}>01.</span>
          Overview
        </h2>
        {data.description.map((paragraph) => (
          <p className={styles.content} key={paragraph}>
            {paragraph}
          </p>
        ))}
      </section>
      <section className={styles.sections} aria-label="Stats and Information">
        <section aria-labelledby="where">
          <h2 className={styles.heading} id="where">
            <span className={styles.index}>02.</span>
            Location{data.type === 'collection' && 's'}
          </h2>
          <p className={styles.content}>
            {data.location}
          </p>
        </section>
        <section aria-labelledby="when">
          <h2 className={styles.heading} id="when">
            <span className={styles.index}>03.</span>
            When
          </h2>
          <p className={styles.content}>
            {getDate(data.date)}
          </p>
        </section>
        {!['day-hike', 'cities'].includes(data.type) && (
          <section aria-labelledby="length">
            <h2 className={styles.heading} id="length">
              <span className={styles.index}>04.</span>
              {data.type === 'collection' && 'Items'}
              {data.type === 'peak-bagging' && 'Summits'}
              {data.type === 'section-hike' && 'Sections'}
              {data.type === 'thru-hike' && 'Duration'}
            </h2>
            <p className={styles.content}>
              {data.type !== 'thru-hike' && data.stats.length.value}
              {data.type === 'thru-hike' && `${data.stats.days.value} days`}
            </p>
          </section>
        )}
        {['peak-bagging', 'section-hike', 'thru-hike'].includes(data.type) && (
          <>
            {data.stats.distance && (
              <section aria-labelledby="distance">
                <h2 className={styles.heading} id="distance">
                  <span className={styles.index}>05.</span>
                  Length
                </h2>
                <p className={styles.content}>
                  {data.stats.distance.value.imperial} {data.stats.distance.units.imperial.full}
                </p>
              </section>
            )}
            {data.stats.altitude && (
              <section aria-labelledby="peak">
                <h2 className={styles.heading} id="peak">
                  <span className={styles.index}>06.</span>
                  Peak
                </h2>
                <p className={styles.content}>
                  {data.stats.altitude.value.imperial} {data.stats.altitude.units.imperial.abbreviated}
                </p>
              </section>
            )}
          </>
        )}
      </section>
    </>
  );
}
