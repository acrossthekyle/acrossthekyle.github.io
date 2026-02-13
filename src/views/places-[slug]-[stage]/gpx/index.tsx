import type { Gpx, Stats } from '@/types';

import Context from './context';
import Elevation from './elevation';
import Route from './route';

type Props = {
  gpx: Gpx;
  stats: Stats;
};

export default function Gpx({ gpx, stats }: Props) {
  return (
    <>
      <Context>
        <Elevation gpx={gpx} stats={stats} />
        <Route gpx={gpx} />
      </Context>
    </>
  );
}
