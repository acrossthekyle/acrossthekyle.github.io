import { useView } from '@/hooks/useView';
import type { Trip } from '@/types';

import Controls from './controls';
import Map from './map';
import Stats from './stats';
import styles from './stylesheet';

type Props = {
  index: number;
  onChange: (index: number) => void;
  trip: Trip;
};

export default function Routes({
  index,
  onChange,
  trip,
}: Props) {
  const { view } = useView();

  return (
    <div className={styles.container(view)}>
      <div className={styles.inner}>
        <Map
          gps={trip.gps}
          index={index}
          onClick={onChange}
          routes={trip.routes}
        />
        <Stats current={trip.stages[index]} />
        <Controls />
      </div>
    </div>
  );
}
