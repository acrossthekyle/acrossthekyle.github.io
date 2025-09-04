'use client';

import Image from 'next/image';
import { useRef } from 'react';

import { useZoom } from '@/hooks/useZoom';
import type { Stage } from '@/types';

import styles from './stylesheet';
import { getOrientation } from './utils';
import { Orientation } from './types';

type Model = {
  handleOnMaximize: () => void;
  zoomRef: React.RefObject<HTMLButtonElement | null>;
};

export function useModel(stage: Stage): Model {
  const zoomRef = useRef<HTMLButtonElement | null>(null);

  const { zoomOut, zoom } = useZoom();

  const handleOnMinimize = () => {
    zoomOut();
  };

  const handleOnMaximize = () => {
    const isLandscape = getOrientation(zoomRef) === Orientation.Landscape;

    zoom({
      content: (
        <button
          className={styles.minimize}
          onClick={handleOnMinimize}
          type="button"
        >
          <Image
            alt=""
            className={styles.image(isLandscape)}
            height={1080}
            sizes="100vw"
            src={stage.images.hero}
            width={1920}
          />
        </button>
      ),
      ref: zoomRef,
    });
  };

  return {
    handleOnMaximize,
    zoomRef,
  };
}
