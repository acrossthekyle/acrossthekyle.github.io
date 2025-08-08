'use client';

import { useModel } from './model';
import styles from './stylesheet';

import { getStats } from './index.utils';
import Timeline from './timeline';

type Props = {
  slug: string;
};

export default function View({ slug }: Props) {
  const { handleOnFullscreen, handleOnGear, trip } = useModel(slug);

  if (!trip) {
    return null; // todo - add loading state
  }

  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <h2>
          {trip.type} &mdash; {trip.location}, {' '}
          {trip.date.dates ? (
            <>
              {trip.date.dates.start.short.month}{' '}
              {trip.date.dates.start.short.day}
              {' '}-{' '}
              {trip.date.dates.end.short.month}{' '}
              {trip.date.dates.end.short.day}, {trip.date.year}
            </>
          ) : (
            <>{trip.date.year.join(' - ')}</>
          )}
          <span className={styles.block}>{getStats(trip)}</span>
        </h2>
        {trip.hasGear && (
          <button
            className={styles.gear}
            onClick={handleOnGear}
            type="button"
          >
            View Gear
          </button>
        )}
      </header>
      <section>
        <Timeline onFullscreen={handleOnFullscreen} trip={trip} />
      </section>
    </article>
  );
}
