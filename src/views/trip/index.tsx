'use client';

import { useModel } from './model';
import styles from './stylesheet';

import { getStats } from './index.utils';
import Timeline from './timeline';

type Props = {
  slug: string;
};

export default function View({ slug }: Props) {
  const { trip } = useModel(slug);

  if (!trip) {
    return null; // todo - add loading state
  }

  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <h1>
          {trip.description.join(getStats(trip))}
        </h1>
      </header>
      <Timeline trip={trip} />
      <footer className={styles.footer}>
        <p>
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
        </p>
        <p>{trip.type}</p>
        {trip.location}
      </footer>
    </article>
  );
}
