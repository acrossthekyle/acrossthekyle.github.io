'use client';

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
};

export default function Figure({
  activeGalleryIndex = 0,
  isFullscreen,
  label,
  onMaximize,
  onMinimize,
  stage,
  total,
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
        images={gallery}
        index={galleryIndex}
        isFullscreen={isFullscreen}
        onInView={handleOnInView}
        onNext={handleOnGalleryNext}
        onPrevious={handleOnGalleryPrevious}
      />
      <Caption label={label} stage={stage} total={total} />
      {isFullscreen ? (
        <button
          className={styles.toggle(hasEnteredView)}
          onClick={onMinimize}
          type="button"
        >
          Close
        </button>
      ) : (
        <button
          className={styles.toggle(hasEnteredView)}
          onClick={() => onMaximize?.(stage, figureRef, galleryIndex)}
          type="button"
        >
          Fullscreen
        </button>
      )}
    </figure>
  );
}
