'use client';

import { Triangle, X } from 'lucide-react';

import type { Trip } from '@/types';

import { useModel } from './timeline.model';
import Image from './timeline.image';
import styles from './timeline.stylesheet';

type Props = {
  isFullscreen: boolean;
  index?: number;
  onFullscreen?: (index: number) => void;
  trip: Trip;
};

export default function Timeline({
  isFullscreen,
  index,
  onFullscreen,
  trip,
}: Props) {
  const {
    activeImages,
    activeImageIndex,
    activeIndex,
    handleOnCarouselNext,
    handleOnCarouselPrevious,
    handleOnMiniscreen,
    handleOnNavigationNext,
    handleOnNavigationPrevious,
    swipeable,
  } = useModel(trip, index);

  return (
    <>
      {isFullscreen && (
        <button
          className={styles.close}
          onClick={handleOnMiniscreen}
          type="button"
        >
          <X className={styles.x} />
        </button>
      )}
      <ol className={styles.timeline(isFullscreen)} {...swipeable}>
        {trip.stages.map((stage) => (
          <li
            className={styles.stage(isFullscreen, activeIndex === stage.index)}
            key={stage.index}
            style={{ animationDelay: `${0.5 + (stage.index * 0.05)}s` }}
          >
            <figure className={styles.figure}>
              {!isFullscreen && (
                <Image
                  isActive
                  isFullscreen={isFullscreen}
                  src={stage.images.hero}
                />
              )}
              {isFullscreen && activeImages.map((image, index: number) => (
                <Image
                  isActive={activeImageIndex === index}
                  isFullscreen={isFullscreen}
                  key={image}
                  src={image}
                />
              ))}
              <figcaption className={styles.caption(isFullscreen)}>
                <p className={styles.eyebrow}>
                  {stage.location && (
                    <>{stage.location}</>
                  )}
                  {!stage.termini.isSame && (
                    <>
                      From {stage.termini.start} to
                    </>
                  )}
                </p>
                <h3 className={styles.title}>{stage.termini.end}</h3>
              </figcaption>
            </figure>
            {!isFullscreen && (
              <button
                className={styles.fullscreen}
                onClick={() => onFullscreen?.(stage.index)}
                type="button"
              >
                Fullscreen
              </button>
            )}
          </li>
        ))}
      </ol>
      {isFullscreen && (
        <>
          {trip.stages[activeIndex].hasStats && (
            <ul className={styles.stats}>
              {trip.stages[activeIndex].stats.distance && (
                <li className={styles.stat}>
                  Distance: {trip.stages[activeIndex].stats.distance.value.imperial} {trip.stages[activeIndex].stats.distance.units.imperial.full}
                </li>
              )}
              {trip.stages[activeIndex].stats.time && (
                <li className={styles.stat}>
                  Time: {trip.stages[activeIndex].stats.time.value} {trip.stages[activeIndex].stats.time.units}
                </li>
              )}
              {trip.stages[activeIndex].stats.max && (
                <li className={styles.stat}>
                  Peak: {trip.stages[activeIndex].stats.max.value.imperial} {trip.stages[activeIndex].stats.max.units.imperial.full}
                </li>
              )}
            </ul>
          )}
          {activeImages.length > 1 && (
            <div className={styles.carousel}>
              <button
                className={styles.control}
                onClick={handleOnCarouselPrevious}
                type="button"
              >
                <Triangle className={styles.previous} />
              </button>
              <span className={styles.current}>
                Image {activeImageIndex + 1}/{activeImages.length}
              </span>
              <button
                className={styles.control}
                onClick={handleOnCarouselNext}
                type="button"
              >
                <Triangle className={styles.next} />
              </button>
            </div>
          )}
          <div className={styles.navigation}>
            <button
              className={styles.control}
              onClick={handleOnNavigationPrevious}
              type="button"
            >
              <Triangle className={styles.previous} />
            </button>
            <span className={styles.current}>
              {String(activeIndex + 1).padStart(3, '0')}/
              {String(trip.stats.length.value).padStart(3, '0')}
            </span>
            <button
              className={styles.control}
              onClick={handleOnNavigationNext}
              type="button"
            >
              <Triangle className={styles.next} />
            </button>
          </div>
        </>
      )}
    </>
  );
}
