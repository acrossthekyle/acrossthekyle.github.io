'use client';

import { InView } from 'react-intersection-observer';

import type { Stage } from '@/types';

import { useModel } from './figure.model';
import Image from './image';
import styles from './stylesheet';

type Props = {
  isFullscreen: boolean;
  onMaximize: (stage: Stage, ref: React.RefObject<HTMLFigureElement | null>) => void;
  onMinimize?: () => void;
  stage: Stage;
};

export default function Figure({ isFullscreen, onMaximize, onMinimize, stage }: Props) {
  const {
    figureRef,
    handleOnInView,
    hasEnteredView,
  } = useModel();

  return (
    <InView onChange={handleOnInView} threshold={1}>
      {({ ref }) => (
        <figure className={styles.figure(isFullscreen)} ref={figureRef}>
          <Image
            isFullscreen={isFullscreen}
            isInView={hasEnteredView}
            ref={ref}
            src={stage.images.hero}
          />
          <figcaption className={styles.caption}>
            <h2 className={styles.heading}>
              {stage.termini.end.map((word) => (
                <span key={word}>{' '}{word}</span>
              ))}
            </h2>
            <p className={styles.subheading}>
              <span className={styles.highlight}>
                {!stage.termini.isSame && 'Via '}
                {!!stage.location ? `${stage.location}, ` : (!stage.termini.isSame ? `${stage.termini.start.join(' ')}, ` : '')}
                {stage.date.short.month}.{stage.date.short.day}.{stage.date.long.year}{' '}
              </span>
            </p>
            {stage.hasStats && (
              <p className={styles.subheading}>
                <span className={styles.highlight}>
                  {stage.stats.distance.value.imperial} {stage.stats.distance.units.imperial.full} / {stage.stats.time.value} {stage.stats.time.units}
                </span>
              </p>
            )}
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
              onClick={() => onMaximize(stage, figureRef)}
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
