'use client';

import { useModel } from './index.model';
import { getStats } from './index.utils';
import styles from './index.stylesheet';
import Timeline from './timeline';

type Props = {
  slug: string;
};

export default function View({ slug }: Props) {
  const { handleOnFullscreen, handleOnGear, trip } = useModel(slug);

  if (!trip) {
    return null;
  }

  return (
    <article className={styles.container}>
      <header>
        <h1 className={styles.title}>{trip.title.join(' ')}</h1>
        <h2 className={styles.heading}>
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
        <Timeline isFullscreen={false} onFullscreen={handleOnFullscreen} trip={trip} />
      </section>
    </article>
  );
}
