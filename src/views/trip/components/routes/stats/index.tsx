import type { Stage } from '@/types';

import styles from './stylesheet';

type Props = {
  current: Stage;
};

export default function Stats({ current }: Props) {
  if (!current.hasStats) {
    return null;
  }

  if (!current.stats) {
    return null;
  }

  const altitude = current.stats.altitude;
  const distance = current.stats.distance;
  const time = current.stats.time;

  return (
    <ul className={styles.stats}>
      {time && (
        <li>
          <span className={styles.label}>Time</span>
          {time.hours.value} <small>{time.hours.units}</small>
          {' '}
          {time.minutes.value} <small>{time.minutes.units}</small>
        </li>
      )}
      {distance && (
        <li>
          <span className={styles.label}>Distance</span>
          {distance.value} <small>{distance.units}</small>
        </li>
      )}
      {altitude && (
        <li>
          <span className={styles.label}>Altitude</span>
          {altitude.value} <small>{altitude.units}</small>
        </li>
      )}
    </ul>
  );
}
