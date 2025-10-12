'use client';

import dynamic from 'next/dynamic';

import styles from './stylesheet';

const Leaflet = dynamic(() => import('./leaflet'), {
  ssr: false,
});

type Props = {
  route: [number, number][];
};

export default function Route({ route }: Props) {
  return (
    <section aria-label="route" className={styles.section} id="route">
      <Leaflet route={route} />
    </section>
  );
}
