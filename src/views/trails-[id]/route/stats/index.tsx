'use client';

import { useContext } from 'react';

import { Length } from '@/ui/units';

import type { Stage } from '../../types';
import { GpxContext } from '../context';

import styles from './stylesheet';

type Props = {
  stages: Stage[];
};

export default function Stats({ stages }: Props) {
  const { activeIndex } = useContext(GpxContext);

  const stage = stages[activeIndex];

  return (
    <ul className={styles.items}>
      <li className={styles.item}>
        <span className={styles.index}>Altitude start</span>
        <Length isSmall value={stage.altitudeStart.value.complex} />
      </li>
      <li className={styles.item}>
        <span className={styles.index}>Altitude max</span>
        <Length isSmall value={stage.altitudeMax.value.complex} />
      </li>
      <li className={styles.item}>
        <span className={styles.index}>Altitude end</span>
        <Length isSmall value={stage.altitudeEnd.value.complex} />
      </li>
      <li className={`${styles.item} ${styles.empty}`}>
        <span className={styles.index}>Elevation gain</span>
        <Length isSmall value={stage.elevationGain.value.complex} />
      </li>
      <li className={styles.item}>
        <span className={styles.index}>Elevation loss</span>
        <Length isSmall value={stage.elevationLoss.value.complex} />
      </li>
    </ul>
  );
}
