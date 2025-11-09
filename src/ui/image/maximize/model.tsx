'use client';

import { X } from 'lucide-react';
import Image from 'next/image';
import { useContext, useRef } from 'react';

import { useZoom } from '@/hooks/useZoom';

import { ImageContext } from '../context';
import styles from './stylesheet';

type Model = {
  handleOnMaximize: () => void;
  handleOnWarn: () => void;
  zoomRef: React.RefObject<HTMLDivElement | null>;
};

export function useModel(): Model {
  const {
    isLandscapeOrientation,
    onMaximized,
    onMinimized,
    onWarn,
    src,
  } = useContext(ImageContext);

  const zoomRef = useRef<HTMLDivElement | null>(null);

  const { zoomOut, zoom } = useZoom();

  const handleOnMinimize = () => {
    zoomOut();

    onMinimized();
  };

  const handleOnMaximize = () => {
    onMaximized();

    zoom({
      content: (
        <div className={styles.minimize}>
          <button
            aria-controls="zoom"
            aria-label="close zoom"
            className={styles.close}
            onClick={handleOnMinimize}
            type="button"
          >
            <X className={styles.icon} />
          </button>
          <Image
            alt=""
            className={styles.image}
            height={1080}
            sizes="(max-width: 768px) 100vw, 50vw"
            src={src}
            width={1920}
          />
        </div>
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
