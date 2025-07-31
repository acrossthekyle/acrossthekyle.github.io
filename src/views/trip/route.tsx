'use client';

import dynamic from 'next/dynamic';

import type { Route, Stage } from '@/types';

import styles from './map.stylesheet';

const Leaflet = dynamic(() => import('./route.leaflet'), {
  ssr: false,
});

type Props = {
  routes: Route[][];
  stages: Stage[];
};

export default function Map(props: Props) {
  return (
    <div className={styles.container}>
      <Leaflet {...props} />
    </div>
  );
}
