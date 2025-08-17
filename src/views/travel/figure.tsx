'use client';

import { ArrowLeft, ArrowRight, Slash } from 'lucide-react';
import { InView } from 'react-intersection-observer';

import type { Stage } from '@/types';

import { useModel } from './figure.model';
import Image from './image';
import styles from './stylesheet';

type Props = {
  activeGalleryIndex?: number;
  isFullscreen?: boolean;
  onMaximize?: (stage: Stage, ref: React.RefObject<HTMLFrameElement | null>, galleryIndex: number) => void;
  onMinimize?: () => void;
  stage: Stage;
  total: string;
};

export default function Figure({
  activeGalleryIndex = 0,
  isFullscreen,
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
    <InView onChange={handleOnInView} threshold={1}>
      {({ ref }) => (
        <figure className={styles.figure(isFullscreen)} ref={figureRef}>
          <Image
            isActive
            isFullscreen={isFullscreen}
            isPlaceholder
            quality={1}
            ref={ref}
            src={stage.images.hero}
          />
          {gallery.length > 1 && (
            <button
              className={`${styles.gallery(isFullscreen ? false : hasEnteredView)} ${styles.previous}`}
              onClick={handleOnGalleryPrevious}
              type="button"
            >
              <ArrowLeft className={styles.arrow} />
            </button>
          )}
          {gallery.map((image: string, index: number) => (
            <Image
              isActive={galleryIndex === index}
              isFullscreen={isFullscreen}
              isInView={hasEnteredView}
              key={image}
              src={image}
            />
          ))}
          {gallery.length > 1 && (
            <button
              className={`${styles.gallery(isFullscreen ? false : hasEnteredView)} ${styles.next}`}
              onClick={handleOnGalleryNext}
              type="button"
            >
              <ArrowRight className={styles.arrow} />
            </button>
          )}
          <figcaption className={styles.caption}>
            <h2 className={styles.heading}>
              {stage.termini.end.map((word) => (
                <span key={word}>{' '}{word}</span>
              ))}
              <span className={styles.index}>
                {String(stage.index + 1).padStart(3, '0')} <Slash className={styles.slash} /> {String(total).padStart(3, '0')}
              </span>
            </h2>
            <p className={styles.subheading}>
              {(!stage.termini.isSame || !!stage.location) && (
                <span className={styles.highlight}>
                  {!stage.termini.isSame && 'Via '}
                  {!!stage.location ? stage.location : (!stage.termini.isSame ? `${stage.termini.start.join(' ')}` : '')}
                </span>
              )}
              {stage.hasStats && (
                <>
                  {!stage.termini.isSame && <span className={styles.break}>-</span>}
                  <span className={styles.highlight}>
                    {stage.stats.distance && (
                      <>
                        {stage.stats.distance.value.imperial}{' '}
                        {stage.stats.distance.units.imperial.full}
                      </>
                    )}
                    /
                    {stage.stats.time && (
                      <>
                        {stage.stats.time.value}{' '}
                        {stage.stats.time.units}
                      </>
                    )}
                  </span>
                </>
              )}
            </p>
            <p className={styles.subheading}>
              <span className={styles.highlight}>
                {stage.date.short.month}.{stage.date.short.day}.{stage.date.long.year}
                {gallery.length > 1 && (
                  <>
                    {', '}{galleryIndex + 1}/{gallery.length}
                  </>
                )}
              </span>
            </p>
          </figcaption>
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
      )}
    </InView>
  );
}
