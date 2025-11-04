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
  route: number[][] | null;
  shouldShrink: boolean;
  termini: Termini;
};

export default function Route({ route, shouldShrink, termini }: Props) {
  const { hoverIndex } = useContext(GpxContext);

  if (route === null) {
    return null;
  }

  return (
    <div className={styles.section(shouldShrink)}>
      <Leaflet
        hoverIndex={hoverIndex}
        resize={shouldShrink}
        route={route}
        termini={termini}
      />
    </div>
  );
}
