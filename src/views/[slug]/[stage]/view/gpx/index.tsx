import type { Gpx, Termini } from '@/types';

import Context from './context';
import Elevation from './elevation';
import Route from './route';
import styles from './stylesheet';

type Props = {
  gpx: Gpx;
  termini: Termini;
};

export default function Gpx({ gpx, termini }: Props) {
  return (
    <section aria-label="route and elevation gpx" className={styles.container}>
      <Context>
        <Route gpx={gpx} termini={termini} />
        <Elevation gpx={gpx} />
      </Context>
    </section>
  );
}
