'use client';

import dynamic from 'next/dynamic';

import type { Termini } from '@/types';

import styles from './stylesheet';

const Leaflet = dynamic(() => import('./leaflet'), {
  ssr: false,
});

type Props = {
  route: [number, number][];
  termini: Termini;
};

export default function Route({ route, termini }: Props) {
  return (
    <section aria-label="route" className={styles.section} id="route">
      <Leaflet route={route} termini={termini} />
    </section>
  );
}
