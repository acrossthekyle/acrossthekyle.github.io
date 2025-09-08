'use client';

import Image from 'next/image';
import { useContext, useEffect, useRef } from 'react';

import { useZoom } from '@/hooks/useZoom';
import { Orientation } from '@/types';
import { getOrientation } from '@/utils';

import { ImageContext } from '../context';
import styles from './stylesheet';

type Model = {
  handleOnMaximize: () => void;
  handleOnWarn: () => void;
  zoomRef: React.RefObject<HTMLButtonElement | null>;
};

export function useModel(): Model {
  const {
    isLandscapeOrientation,
    isLoading,
    onMaximized,
    onMinimized,
    onOrientation,
    onWarn,
    src,
  } = useContext(ImageContext);

  const zoomRef = useRef<HTMLButtonElement | null>(null);

  const { zoomOut, zoom } = useZoom();

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        onOrientation(getOrientation(zoomRef) === Orientation.Landscape);
      }, 100);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  const handleOnMinimize = () => {
    zoomOut();

    onMinimized();
  };

  const handleOnMaximize = () => {
    onMaximized();

    zoom({
      content: (
        <button
          className={styles.minimize}
          onClick={handleOnMinimize}
          type="button"
        >
          <Image
            alt="Fullscreen image"
            className={styles.image(isLandscapeOrientation)}
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

  const handleOnWarn = () => {
    onWarn();
  };

  return {
    handleOnMaximize,
    handleOnWarn,
    zoomRef,
  };
}
