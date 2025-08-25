'use client';

import { Maximize, Minimize } from 'lucide-react';

import type { Stage } from '@/types';

import Caption from './caption';
import Gallery from './gallery';
import { useModel } from './model';
import styles from './stylesheet';

type Props = {
  activeGalleryIndex?: number;
  isFullscreen?: boolean;
  label: string;
  onMaximize?: (stage: Stage, ref: React.RefObject<HTMLFrameElement | null>, galleryIndex: number) => void;
  onMinimize?: () => void;
  stage: Stage;
  total: string;
  type: string;
};

export default function Figure({
  activeGalleryIndex = 0,
  isFullscreen,
  label,
  onMaximize,
  onMinimize,
  stage,
  total,
  type,
}: Props) {
  const {
    figureRef,
    gallery,
    galleryIndex,
    handleOnInView,
    handleOnGalleryNext,
    handleOnGalleryPrevious,
    hasEnteredView,
  } = useModel(stage.images, activeGalleryIndex);

  return (
    <figure className={styles.figure(isFullscreen)} ref={figureRef}>
      <Gallery
        hasEnteredView={hasEnteredView}
        imageFilter={stage.imageFilter}
        images={gallery}
        index={galleryIndex}
        isFullscreen={isFullscreen}
        onInView={handleOnInView}
        onNext={handleOnGalleryNext}
        onPrevious={handleOnGalleryPrevious}
      />
      <Caption label={label} stage={stage} total={total} />
      {type !== 'collection' && (
        <>
          {isFullscreen ? (
            <button
              className={styles.toggle(hasEnteredView)}
              onClick={onMinimize}
              type="button"
            >
              <Minimize />
            </button>
          ) : (
            <button
              className={styles.toggle(hasEnteredView)}
              onClick={() => onMaximize?.(stage, figureRef, galleryIndex)}
              type="button"
            >
              <Maximize />
            </button>
          )}
        </>
      )}
    </figure>
  );
}
