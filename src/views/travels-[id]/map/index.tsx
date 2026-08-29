'use client';

import dynamic from 'next/dynamic';

import tw from '@/styles';
import type { Data, Landmark as LandmarkType, Trail } from '@/types';

import Coordinates from './coordinates';

const Plugin = dynamic(() => import('./leaflet'), {
  ssr: false,
});

type Props = {
  landmarks?: LandmarkType[];
  trail?: Trail[];
  travel: Data;
};

export default function Map({ landmarks, trail, travel }: Props) {
  return (
    <section aria-label="map" className={styles.container}>
      <Plugin center={travel.coordinates} landmarks={landmarks} trail={trail} />
      {!landmarks && !trail && <Coordinates value={travel.coordinates} />}
    </section>
  );
}

const styles = tw({
  container: `
    relative z-0 -top-0.25
    col-span-1 order-1
    h-[80svh] w-full

    landscape-constrained:h-dvh

    sm:fixed
    sm:top-0
    sm:right-0
    sm:bottom-0
    sm:w-1/2
    sm:h-svh
    sm:border-l
    sm:border-current/12.5
    lg:relative
    lg:top-auto
    lg:right-auto
    lg:bottom-auto
    lg:w-full
    lg:order-2
  `,
});
