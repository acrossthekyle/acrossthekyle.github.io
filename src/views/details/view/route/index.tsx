'use client';

import dynamic from 'next/dynamic';

import type { Termini } from '@/types';

import styles from './stylesheet';

const Leaflet = dynamic(() => import('./leaflet'), {
  ssr: false,
});

type Props = {
  route: number[][] | null;
  termini: Termini;
};

export default function Route({ route, termini }: Props) {
  if (route === null) {
    return null;
  }

  return (
    <section>
      <h2 className={styles.heading}>
        Route
      </h2>
      <div className={styles.section}>
        <Leaflet route={route} termini={termini} />
      </div>
    </section>
  );
}
