'use client';

import dynamic from 'next/dynamic';
import { useContext } from 'react';

import type { Stage } from '../../../types';
import { GpxContext } from '../../context';

import styles from './stylesheet';

const Plugin = dynamic(() => import('./leaflet'), {
  ssr: false,
});

type Props = {
  stages: Stage[];
};

export default function Map({ stages }: Props) {
  const { activeIndex, hoverIndex, onClick } = useContext(GpxContext);

  if (stages.length === 0) {
    return null;
  }

  const latLongs = stages.map((stage) => stage.latLong);

  return (
    <div className={styles.container}>
      <Plugin
        activeIndex={activeIndex}
        hoverIndex={hoverIndex}
        latLongs={latLongs}
        onClick={onClick}
      />
    </div>
  );
}
