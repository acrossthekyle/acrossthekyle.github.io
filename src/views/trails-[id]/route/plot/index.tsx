'use client';

import { useContext } from 'react';

import type { Stage } from '../../types';
import { GpxContext } from '../context';

import Elevation from './elevation';
import Map from './map';
import Stats from './stats';
import styles from './stylesheet';

type Props = {
  stages: Stage[];
};

export default function Plot({ stages }: Props) {
  const { isToggled } = useContext(GpxContext);

  return (
    <div className={styles.container(isToggled)}>
      <Map stages={stages} />
      <Elevation stages={stages} />
      <Stats stages={stages} />
    </div>
  );
}
