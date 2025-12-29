import type { Gpx, Termini } from '@/types';

import Context from './context';
import Elevation from './elevation';
import Route from './route';

type Props = {
  gpx: Gpx;
  termini: Termini;
};

export default function Gpx({ gpx, termini }: Props) {
  return (
    <Context>
      <Route gpx={gpx} termini={termini} />
      <Elevation gpx={gpx} />
    </Context>
  );
}
