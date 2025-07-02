'use client';

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
      {trips.map((trip, index: number) => (
        <Card index={index} key={index} onClick={handleOnClick} trip={trip} />
      ))}
    </ul>
  );
}
