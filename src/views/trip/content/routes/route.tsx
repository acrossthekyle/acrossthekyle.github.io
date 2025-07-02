'use client';

import dynamic from 'next/dynamic';

import styles from './stylesheet';

const RouteMap = dynamic(() => import('./route.map'), {
  ssr: false,
});

type Props = {
  currentIndex: number;
  onClick: (index: number)=> void;
  routes: [number, number][][];
};

export default function Route({
  currentIndex,
  onClick,
  routes,
}: Props) {
  return (
    <div className={styles.map}>
      <div className={styles.compass}>
        <span className={styles.north} /> N
      </div>
      <RouteMap
        currentIndex={currentIndex}
        onClick={onClick}
        routes={routes}
      />
    </div>
  );
}
