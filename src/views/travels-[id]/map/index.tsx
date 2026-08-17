'use client';

import dynamic from 'next/dynamic';

import tw from '@/styles';
import type { Collection } from '@/types';

const Plugin = dynamic(() => import('./leaflet'), {
  ssr: false,
});

type Props = {
  collection: Collection;
};

export default function Map({ collection }: Props) {
  return (
    <section aria-label="map" className={styles.container}>
      <Plugin collection={collection} />
      <h2 className={styles.header}>
        <span className={styles.title}>
          {collection.location.region}
        </span>
        <span className={styles.location}>
          {collection.location.country}
        </span>
        <span className={styles.coordinates}>
          {collection.coordinates}
        </span>
      </h2>
      <span className={styles.vertical} />
      <span className={styles.horizontal} />
    </section>
  );
}

const styles = tw({
  container: `
    relative z-0
    col-span-1 order-1
    h-[80svh] w-full

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
    lg:border-l-0
  `,
  header: `
    absolute bottom-6 right-6 z-5
    flex flex-col
    uppercase
    text-tiny text-right

    sm:left-6
    sm:right-auto
    sm:text-left
    sm:text-xtiny
  `,
  title: `
    font-black
  `,
  location: `
    italic
  `,
  coordinates: `
    font-mono
  `,
  vertical: `
    absolute top-1/2 left-1/2 z-2
    -translate-x-1/2 -translate-y-1/2
    w-px
    h-6
    bg-(--foreground)/50
  `,
  horizontal: `
    absolute top-1/2 left-1/2 z-2
    -translate-x-1/2 -translate-y-1/2
    w-6
    h-px
    bg-(--foreground)/50
  `,
});
