import type { Stage } from '../types';

import Context from './context';
import Sidebar from './sidebar';
import Plot from './plot';
import styles from './stylesheet';
import Toggle from './toggle';

type Props = {
  stages: Stage[];
};

export default function Route({ stages }: Props) {
  return (
    <div className={styles.container}>
      <Context>
        <Toggle />
        <Sidebar stages={stages} />
        <Plot stages={stages} />
      </Context>
    </div>
  );
}
