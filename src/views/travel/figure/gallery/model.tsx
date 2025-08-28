'use client';

import { Minimize } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import { useZoom } from '@/hooks/useZoom';
import type { Stage } from '@/types';

import styles from './image/stylesheet';
import { getOrientation } from './utils';
import { Orientation } from './types';

type Model = {
  handleOnMaximize: () => void;
  handleOnNext: () => void;
  handleOnPrevious: () => void;
  images: string[];
  index: number;
  zoomRef: React.RefObject<HTMLImageElement | null>;
};

export function useModel(stage: Stage): Model {
  const [images, setImages] = useState<string[]>([]);
  const [index, setIndex] = useState(0);

  const zoomRef = useRef<HTMLImageElement | null>(null);

  const { zoomOut, zoom } = useZoom();

  useEffect(() => {
    setImages([
      stage.images.hero,
      ...stage.images.supplementary,
    ]);
  }, [stage.images]);

  const handleOnNext = () => {
    const total = images.length - 1;

    setIndex((previousIndex: number) => {
      return index === total ? 0 : previousIndex + 1;
    });
  };

  const handleOnPrevious = () => {
    const total = images.length - 1;

    setIndex((previousIndex: number) => {
      return index === 0 ? total : previousIndex - 1;
    });
  };

  const handleOnMinimize = () => {
    zoomOut();
  };

  const handleOnMaximize = () => {
    const isLandscape = getOrientation(zoomRef) === Orientation.Landscape;

    zoom({
      content: (
        <div className={styles.minimize}>
          <Image
            alt=""
            className={styles.maximized(isLandscape)}
            height={1080}
            sizes="100vw"
            src={images[index]}
            width={1920}
          />
          <button
            className={styles.toggle}
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
    handleOnMaximize,
    handleOnNext,
    handleOnPrevious,
    images,
    index,
    zoomRef,
  };
}
