'use client';

import type { Trip } from '@/types';

import Card from './card';
import Skeleton from './skeleton';
import { useModel } from './model';
import styles from './stylesheet';

export default function View() {
  const { isLoading, trips } = useModel();

  if (isLoading) {
    return (
      <Skeleton />
    );
  }

  return (
    <ul className={styles.view}>
      {trips.map((trip: Trip) => (
        <Card
          key={trip.index}
          trip={trip}
        />
      ))}
    </ul>
  );
}
