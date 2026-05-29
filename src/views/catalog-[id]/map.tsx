'use client';

import dynamic from 'next/dynamic';

import styles from './stylesheet';

const Plugin = dynamic(() => import('./leaflet'), {
  ssr: false,
});

type Props = {
  coordinates: string;
};

export default function Map({ coordinates }: Props) {
  return (
    <div aria-hidden="true" className={styles.map} role="presentation">
      <Plugin coordinates={coordinates} />
    </div>
  );
}
