import type { Trip } from '@/types';

import styles from './stylesheet';

type Props = {
  active: number;
  trip: Trip;
};

export default function Header({
  active,
  trip,
}: Props) {
  return (
    <div className={styles.header}>
      <p className={styles.location}>{trip.location}</p>
      <p className={styles.trip}>
        {trip.title}
      </p>
      <p className={styles.title}>
        {trip.stages[active].title.replace(/ to /g, '\u00A0\u2192\u00A0')}
      </p>
      <p className={styles.step}>
        {trip.label} {active + 1} / {trip.length}
      </p>
    </div>
  );
}
