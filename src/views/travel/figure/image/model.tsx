'use client';

import { Minimize } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import { useZoom } from '@/hooks/useZoom';
import type { Stage } from '@/types';

import styles from './stylesheet';
import { getOrientation } from './utils';
import { Orientation } from './types';

type Model = {
  handleOnLoad: () => void;
  handleOnMaximize: () => void;
  isLoading: boolean;
  zoomRef: React.RefObject<HTMLImageElement | null>;
};

export function useModel(stage: Stage): Model {
  const [isLoading, setIsLoading] = useState(true);

  const zoomRef = useRef<HTMLImageElement | null>(null);

  const { zoomOut, zoom } = useZoom();

  useEffect(() => {
    setIsLoading(true);
  }, [stage.images.hero]);

  const handleOnLoad = () => {
    setIsLoading(false);
  };

  const handleOnMinimize = () => {
    zoomOut();
  };

  const handleOnMaximize = () => {
    const isLandscape = getOrientation(zoomRef) === Orientation.Landscape;

    zoom({
      content: (
        <div className={styles.zoomed}>
          <Image
            alt=""
            className={styles.maximized(isLandscape)}
            height={1080}
            sizes="100vw"
            src={stage.images.hero}
            width={1920}
          />
          <button
            className={styles.minimize}
            onClick={handleOnMinimize}
            type="button"
          >
            <Minimize />
          </button>
        </div>
      ),
      ref: zoomRef,
    });
  };

  return {
    handleOnLoad,
    handleOnMaximize,
    isLoading,
    zoomRef,
  };
}
