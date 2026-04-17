import type { Trail } from '../types';

import Context from './context';
import Coordinates from './coordinates';
import Map from './map';
import North from './north';
import Sidebar from './sidebar';

type Props = {
  trail: Trail;
};

export default function Route({ trail }: Props) {
  return (
    <Context>
      <Map stages={trail.stages} />
      <Coordinates />
      <North />
      <Sidebar trail={trail} />
    </Context>
  );
}
