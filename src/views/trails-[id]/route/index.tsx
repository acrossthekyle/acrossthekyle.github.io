import type { Stage } from '../types';

import Context from './context';
import Elevation from './elevation';
import Map from './map';
import Cta from './cta';
import Stats from './stats';
import styles from './stylesheet';

type Props = {
  stages: Stage[];
};

export default function Route({ stages }: Props) {
  const total = stages.length;

  return (
    <div className={styles.container}>
      <Context>
        <aside className={styles.sidebar}>
          <ul className={styles.stages}>
            {stages.map((stage, index: number) => (
              <li className={styles.stage} key={stage.coordinates}>
                <Cta index={index} stage={stage} total={total} />
              </li>
            ))}
          </ul>
        </aside>
        <div className={styles.plot}>
          <Map stages={stages} />
          <Elevation stages={stages} />
          <Stats stages={stages} />
        </div>
      </Context>
    </div>
  );
}
