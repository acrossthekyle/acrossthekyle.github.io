'use client';

import { Triangle } from 'lucide-react';
import Image from 'next/image';

import type { Trip } from '@/types';

import { useModel } from './timeline.model';
import styles from './timeline.stylesheet';

type Props = {
  isFullscreen?: boolean;
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
    handleOnMiniscreen,
    handleOnNext,
    handleOnPrevious,
  } = useModel(trip, index);

  return (
    <>
      {isFullscreen && (
        <button
          className={styles.close}
          onClick={handleOnMiniscreen}
          type="button"
        >
          Exit
        </button>
      )}
      <ol className={styles.timeline(isFullscreen)}>
        {trip.stages.map((stage) => (
          <li
            className={styles.stage(isFullscreen, activeIndex === stage.index)}
            key={stage.index}
            style={{ animationDelay: `${0.5 + (stage.index * 0.05)}s` }}
          >
            <figure className="h-full w-full">
              {!isFullscreen && (
                <Image
                  alt=""
                  className={styles.image(isFullscreen, true)}
                  height="1080"
                  src={stage.images.hero}
                  width="1920"
                />
              )}
              {isFullscreen && activeImages.map((image, index: number) => (
                <Image
                  alt=""
                  className={styles.image(isFullscreen, activeImageIndex === index)}
                  height="1080"
                  key={image}
                  src={image}
                  width="1920"
                />
              ))}
              <figcaption className={styles.caption}>
                <p className={styles.eyebrow}>
                  <span className={styles.index}>
                    {String(stage.index + 1).padStart(3, '0')}/
                    {String(trip.stats.length.value).padStart(3, '0')}
                  </span>
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
            {isFullscreen && stage.hasStats && (
              <ul className={styles.stats}>
                {stage.stats.distance && (
                  <li className={styles.stat}>
                    Distance: {stage.stats.distance.value.imperial} {stage.stats.distance.units.imperial.full}
                  </li>
                )}
                {stage.stats.time && (
                  <li className={styles.stat}>
                    Time: {stage.stats.time.value} {stage.stats.time.units}
                  </li>
                )}
                {stage.stats.max && (
                  <li className={styles.stat}>
                    Peak: {stage.stats.max.value.imperial} {stage.stats.max.units.imperial.full}
                  </li>
                )}
              </ul>
            )}
          </li>
        ))}
      </ol>
      {isFullscreen && activeImages.length > 1 && (
        <div className={styles.navigation}>
          <span className={styles.current}>
            image {activeImageIndex + 1}/{activeImages.length}
          </span>
          <button
            className={styles.control}
            onClick={handleOnPrevious}
            type="button"
          >
            <Triangle className={styles.previous} />
          </button>
          <button
            className={styles.control}
            onClick={handleOnNext}
            type="button"
          >
            <Triangle className={styles.next} />
          </button>
        </div>
      )}
    </>
  );
}
