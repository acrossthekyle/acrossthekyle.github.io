'use client';

import type { Trip } from '@/types';

import Card from './card';
import Skeleton from './skeleton';
import { useModel } from './model';
import styles from './stylesheet';

export default function View() {
  const { handleOnClick, isLoading, trips } = useModel();

  if (isLoading) {
    return (
      <Skeleton />
    );
  }

  return (
    <ul className={styles.view}>
      {trips.map((trip: Trip, index: number) => (
        <Card
          index={index}
          key={index}
          onClick={() => handleOnClick(trip)}
          trip={trip}
        />
      ))}
    </ul>
  );
}
