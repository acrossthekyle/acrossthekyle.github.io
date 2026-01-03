'use client';

import dynamic from 'next/dynamic';
import { useContext } from 'react';

import type { Gpx, Termini } from '@/types';

import { GpxContext } from '../context';

import styles from './stylesheet';

const Plugin = dynamic(() => import('./leaflet'), {
  ssr: false,
});

type Props = {
  gpx: Gpx;
  termini: Termini;
};

export default function Route({ gpx, termini }: Props) {
  const { hoverIndex } = useContext(GpxContext);

  if (gpx.length === 0) {
    return null;
  }

  return (
    <div className={styles.section}>
      <h4 className={styles.title}>Route</h4>
      <Plugin
        gpx={gpx}
        hoverIndex={hoverIndex}
        termini={termini}
      />
    </div>
  );
}
