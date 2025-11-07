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
  shouldShrink: boolean;
  termini: Termini;
};

export default function Route({ gpx, shouldShrink, termini }: Props) {
  const { hoverIndex } = useContext(GpxContext);

  if (gpx.length === 0) {
    return null;
  }

  return (
    <div className={styles.section(shouldShrink)}>
      <Plugin
        gpx={gpx}
        hoverIndex={hoverIndex}
        resize={shouldShrink}
        termini={termini}
      />
    </div>
  );
}
