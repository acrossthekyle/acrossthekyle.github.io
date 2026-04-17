'use client';

import dynamic from 'next/dynamic';
import { useContext } from 'react';

import type { Stage } from '../../types';
import { GpxContext } from '../context';

import styles from './stylesheet';

const Plugin = dynamic(() => import('./leaflet'), {
  ssr: false,
});

type Props = {
  stages: Stage[];
};

export default function Map({ stages }: Props) {
  const { elevationIndex, onStage, stageIndex } = useContext(GpxContext);

  if (stages.length === 0) {
    return null;
  }

  const latLongs = stages.map((stage) => stage.latLong);

  return (
    <div className={styles.container}>
      <Plugin
        elevationIndex={elevationIndex}
        latLongs={latLongs}
        onStage={onStage}
        stageIndex={stageIndex}
      />
    </div>
  );
}
