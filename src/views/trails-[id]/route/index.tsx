import type { Trail } from '../types';

import Context from './context';
import Map from './map';
import Sidebar from './sidebar';

type Props = {
  trail: Trail;
};

export default function Route({ trail }: Props) {
  return (
    <Context>
      <Map stages={trail.stages} />
      <Sidebar trail={trail} />
    </Context>
  );
}
