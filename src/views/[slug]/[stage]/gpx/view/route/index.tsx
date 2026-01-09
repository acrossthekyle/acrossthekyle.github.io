'use client';

import dynamic from 'next/dynamic';
import { useContext } from 'react';

import type { Gpx } from '@/types';

import { GpxContext } from '../context';

import styles from './stylesheet';

const Plugin = dynamic(() => import('./leaflet'), {
  ssr: false,
});

type Props = {
  gpx: Gpx;
  isSame: boolean;
};

export default function Route({ gpx, isSame }: Props) {
  const { hoverIndex } = useContext(GpxContext);

  if (gpx.length === 0) {
    return null;
  }

  return (
    <div className={styles.section}>
      <Plugin
        gpx={gpx}
        hoverIndex={hoverIndex}
        isSame={isSame}
      />
    </div>
  );
}
