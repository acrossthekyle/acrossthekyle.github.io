import { type Trip } from '../../types';
import { Stage } from '../types';
import { useModel } from './model';
import Resize from './resize';
import Route from './route';
import styles from './stylesheet';

type Props = {
  currentIndex: number;
  onChange: (index: number) => void;
  stages: Stage[];
  trip: Trip;
};

export default function Routes({
  currentIndex,
  onChange,
  stages,
  trip,
}: Props) {
  const { routes } = useModel(trip);

  return (
    <div className={styles.container}>
      <Route
        currentIndex={currentIndex}
        onClick={onChange}
        routes={routes}
      />
      <ul className={styles.stats}>
        <li>
          <span className={styles.label}>Time</span>
          {Number(stages[currentIndex].stats.time.hours)} <small>h</small>
          {' '}
          {Number(stages[currentIndex].stats.time.minutes)} <small>m</small>
        </li>
        <li>
          <span className={styles.label}>Distance</span>
          {stages[currentIndex].stats.distance} <small>miles</small>
        </li>
        <li>
          <span className={styles.label}>Altitude</span>
          {new Intl.NumberFormat().format(Number(stages[currentIndex].stats.altitude))}
          {' '}
          <small>ft</small>
        </li>
      </ul>
      <Resize />
    </div>
  );
}
