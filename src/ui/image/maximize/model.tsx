'use client';

import Image from 'next/image';
import { useContext, useRef } from 'react';

import { useZoom } from '@/hooks/useZoom';
import { Orientation } from '@/types';
import { getOrientation } from '@/utils';

import { ImageContext } from '../context';
import styles from './stylesheet';

type Model = {
  handleOnMaximize: () => void;
  zoomRef: React.RefObject<HTMLButtonElement | null>;
};

export function useModel(): Model {
  const { onMaximized, onMinimized, src } = useContext(ImageContext);

  const zoomRef = useRef<HTMLButtonElement | null>(null);

  const { zoomOut, zoom } = useZoom();

  const handleOnMinimize = () => {
    zoomOut();

    onMinimized();
  };

  const handleOnMaximize = () => {
    onMaximized();

    const isLandscape = getOrientation(zoomRef) === Orientation.Landscape;

    zoom({
      content: (
        <button
          className={styles.minimize}
          onClick={handleOnMinimize}
          type="button"
        >
          <Image
            alt="Fullscreen image"
            className={styles.image(isLandscape)}
            height={1080}
            sizes="(max-width: 768px) 100vw, 50vw"
            src={src}
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
