'use client';

import dynamic from 'next/dynamic';
import { useContext } from 'react';

import type { Termini } from '@/types';

import { GpxContext } from '../context';

import styles from './stylesheet';

const Leaflet = dynamic(() => import('./leaflet'), {
  ssr: false,
});

type Props = {
  elevation: string[] | null;
  route: number[][] | null;
  shouldShrink: boolean;
  termini: Termini;
};

export default function Route({ elevation, route, shouldShrink, termini }: Props) {
  const { hoverIndex } = useContext(GpxContext);

  if (elevation === null || route === null) {
    return null;
  }

  return (
    <div className={styles.section(shouldShrink)}>
      <Leaflet
        elevation={elevation}
        hoverIndex={hoverIndex}
        resize={shouldShrink}
        route={route}
        termini={termini}
      />
    </div>
  );
}
