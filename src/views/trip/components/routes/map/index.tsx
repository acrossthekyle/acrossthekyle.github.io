'use client';

import dynamic from 'next/dynamic';

import type { StageGPS } from '@/types';

import styles from './stylesheet';

const Routes = dynamic(() => import('./leaflet.routes'), {
  ssr: false,
});

const Gps = dynamic(() => import('./leaflet.gps'), {
  ssr: false,
});

type Props = {
  gps: StageGPS[] | null;
  index: number;
  onClick: (index: number)=> void;
  routes: [number, number][][] | null;
};

export default function Map({
  gps,
  index,
  onClick,
  routes,
}: Props) {
  if (gps === null && routes === null) {
    return null;
  }

  return (
    <div className={styles.map}>
      <div className={styles.compass}>
        <span className={styles.north} /> N
      </div>
      {gps !== null && (
        <Gps
          currentIndex={index}
          gps={gps}
          onClick={onClick}
        />
      )}
      {routes !== null && (
        <Routes
          currentIndex={index}
          onClick={onClick}
          routes={routes}
        />
      )}
    </div>
  );
}
