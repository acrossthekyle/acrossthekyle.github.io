'use client';

import Image from 'next/image';
import { useContext, useRef } from 'react';

import { useZoom } from '@/hooks/useZoom';

import { ImageContext } from '../context';
import styles from './stylesheet';

type Model = {
  handleOnMaximize: () => void;
  handleOnWarn: () => void;
  zoomRef: React.RefObject<HTMLButtonElement | null>;
};

export function useModel( caption?: string[] ): Model {
  const {
    isLandscapeOrientation,
    onMaximized,
    onMinimized,
    onWarn,
    src,
  } = useContext(ImageContext);

  const zoomRef = useRef<HTMLButtonElement | null>(null);

  const { zoomOut, zoom } = useZoom();

  const handleOnMinimize = () => {
    zoomOut();

    onMinimized();
  };

  const handleOnMaximize = () => {
    onMaximized();

    zoom({
      caption: caption?.join(' / '),
      content: (
        <button
          aria-label="minimize image"
          className={styles.minimize}
          onClick={handleOnMinimize}
          type="button"
        >
          <Image
            alt={caption ? caption.join(' ') : ''}
            className={styles.image}
            height={1080}
            sizes="(max-width: 768px) 100vw, 50vw"
            src={src}
            width={1920}
          />
        </button>
      ),
      isLandscapeOrientation,
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
