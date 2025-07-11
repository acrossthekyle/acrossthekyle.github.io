import type { Trip } from '@/types';

import styles from './stylesheet';

type Props = {
  trip: Trip;
};

export default function Header({ trip }: Props) {
  return (
    <div className={styles.header}>
      <p className={styles.trip}>{trip.title}</p>
      <p className={styles.location}>{trip.location}</p>
    </div>
  );
}
