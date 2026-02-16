import type { Gpx, Stats } from '@/types';

import Context from './context';
import Elevation from './elevation';
import Route from './route';
import styles from './stylesheet';

type Props = {
  gpx: Gpx;
  stats: Stats;
};

export default function Gpx({ gpx, stats }: Props) {
  return (
    <>
      <hr className={styles.hr} />
      <h2>
        <strong>Elevation and route</strong>
        <small>Data gathered via GPS smartwatch</small>
      </h2>
      <Context>
        <Elevation gpx={gpx} stats={stats} />
        <Route gpx={gpx} />
      </Context>
    </>
  );
}
