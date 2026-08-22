'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';

import tw from '@/styles';
import type { Collection, Landmark } from '@/types';

const Plugin = dynamic(() => import('./leaflet'), {
  ssr: false,
});

type Props = {
  collection: Collection;
  landmarks?: Landmark[];
};

export default function Map({ collection, landmarks }: Props) {
  const [canRenderLandmarks, setCanRenderLandmarks] = useState(false);

  const handleLandmarks = () => {
    setCanRenderLandmarks(previous => !previous);
  };

  return (
    <section aria-label="map" className={styles.container}>
      <Plugin
        canRenderLandmarks={canRenderLandmarks}
        collection={collection}
        landmarks={landmarks}
      />
      {!canRenderLandmarks && (
        <>
          <span className={styles.coordinates}>
            {collection.coordinates}
          </span>
          <span className={styles.vertical} />
          <span className={styles.horizontal} />
        </>
      )}
      <nav aria-label="supplementary navigation" className={styles.navigation}>
        {landmarks && (
          <button
            className={styles.navigate(canRenderLandmarks)}
            onClick={handleLandmarks}
            type="button"
          >
            Landmarks
          </button>
        )}
        {/*<button
          className={styles.navigate}
          onClick={() => {}}
          type="button"
        >
          Trail
        </button>*/}
      </nav>
    </section>
  );
}

const styles = tw({
  container: `
    relative z-0 -top-0.25
    col-span-1 order-1
    h-[60svh] w-full
    border-current/12.5

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
  vertical: `
    absolute top-1/2 left-1/2 z-2
    -translate-x-1/2 -translate-y-1/2
    w-px
    h-6

    dark:bg-(--background)/50
    light:bg-(--foreground)/50
  `,
  horizontal: `
    absolute top-1/2 left-1/2 z-2
    -translate-x-1/2 -translate-y-1/2
    w-6
    h-px

    dark:bg-(--background)/50
    light:bg-(--foreground)/50
  `,
  navigation: `
    absolute bottom-6 left-6 z-2
    flex gap-2
  `,
  navigate: (isActive: boolean) => tw(`
    flex items-center gap-2
    px-1.5 pb-1.5 pt-2
    leading-[0.8]
    text-tiny text-(--background) dark:text-(--foreground)
    uppercase
    tracking-wider
    rounded-xs

    motion-safe:duration-300

    ${isActive
      ? 'bg-(--foreground)/50 dark:bg-(--background)/50'
      : 'bg-(--foreground) dark:bg-(--background)'
    }

    hover:bg-(--foreground)/50
    dark:hover:bg-(--background)/50

    sm:text-xtiny
  `),
});
