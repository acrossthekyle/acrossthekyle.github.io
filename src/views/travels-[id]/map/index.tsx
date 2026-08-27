'use client';

import dynamic from 'next/dynamic';

import tw from '@/styles';
import type { Data, Landmark as LandmarkType, Trail } from '@/types';

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
      <Plugin
        center={travel.coordinates}
        landmarks={landmarks}
        trail={trail}
      />
      {!landmarks && !trail && (
        <>
          <span className={styles.coordinates}>
            {travel.coordinates}
          </span>
          <span className={styles.circle} />
          <span className={styles.vertical} />
          <span className={styles.horizontal} />
        </>
      )}
    </section>
  );
}

const styles = tw({
  container: `
    relative z-0 -top-0.25
    col-span-1 order-1
    h-[80svh] w-full
    border-current/12.5

    landscape-constrained:h-dvh

    sm:fixed
    sm:top-0
    sm:right-0
    sm:bottom-0
    sm:w-1/2
    sm:h-svh
    sm:border-l
    lg:relative
    lg:top-auto
    lg:right-auto
    lg:bottom-auto
    lg:w-full
    lg:order-2
  `,
  coordinates: `
    absolute bottom-6 right-6 z-2
    flex flex-col gap-0.5 items-start
    uppercase
    leading-[1]
    text-tiny
    font-mono

    dark:text-(--background)
    light:text-(--foreground)

    sm:text-xtiny
    sm:top-6
    sm:left-6
    sm:bottom-auto
  `,
  circle: `
    absolute top-1/2 left-1/2 z-2
    -translate-x-1/2 -translate-y-1/2
    w-6
    h-6
    rounded-full
    border

    dark:border-(--background)
    light:border-(--foreground)
  `,
  vertical: `
    absolute top-1/2 left-1/2 z-2
    -translate-x-1/2 -translate-y-1/2
    w-px
    h-12

    dark:bg-(--background)
    light:bg-(--foreground)
  `,
  horizontal: `
    absolute top-1/2 left-1/2 z-2
    -translate-x-1/2 -translate-y-1/2
    w-12
    h-px

    dark:bg-(--background)
    light:bg-(--foreground)
  `,
});
