'use client';

import dynamic from 'next/dynamic';

import type { Location } from '@/types';
import { trimCardinal } from '@/utils';

import styles from './stylesheet';

const Plugin = dynamic(() => import('./leaflet'), {
  ssr: false,
});

type Props = {
  coordinates: string;
  location: Location;
};

export default function Map({ coordinates, location }: Props) {
  return (
    <div aria-hidden="true" className={styles.map} role="presentation">
      <Plugin coordinates={coordinates} />
      <p className={styles.coordinates}>
        <span>{coordinates} &mdash; {location.country}, {trimCardinal(location.continent)}
        </span>
      </p>
    </div>
  );
}
