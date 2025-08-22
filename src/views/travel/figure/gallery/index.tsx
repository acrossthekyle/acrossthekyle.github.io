'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { InView } from 'react-intersection-observer';

import Image from './image';
import styles from './stylesheet';

type Props = {
  hasEnteredView: boolean;
  images: string[],
  index: number,
  isFullscreen?: boolean;
  onInView: (isInView: boolean) => void,
  onNext: () => void,
  onPrevious: () => void,
};

export default function Figure({
  hasEnteredView,
  images,
  index,
  isFullscreen,
  onInView,
  onNext,
  onPrevious,
}: Props) {
  const isInView = isFullscreen ? false : hasEnteredView;

  if (images.length === 0) {
    return null;
  }

  return (
    <InView onChange={onInView} threshold={1}>
      {({ ref }) => (
        <>
          {!isFullscreen && images.length > 1 && (
            <span className={styles.index(isInView)}>
              {index + 1}/{images.length}
            </span>
          )}
          <Image
            isActive
            isFullscreen={isFullscreen}
            isPlaceholder
            quality={1}
            ref={ref}
            src={images[0]}
          />
          {images.length > 1 && (
            <button
              className={`${styles.gallery(isInView)} ${styles.previous}`}
              onClick={onPrevious}
              type="button"
            >
              <ChevronLeft className={styles.arrow} />
            </button>
          )}
          {images.map((image: string, key: number) => (
            <Image
              isActive={index === key}
              isFullscreen={isFullscreen}
              isInView={hasEnteredView}
              key={image}
              src={image}
            />
          ))}
          {images.length > 1 && (
            <button
              className={`${styles.gallery(isInView)} ${styles.next}`}
              onClick={onNext}
              type="button"
            >
              <ChevronRight className={styles.arrow} />
            </button>
          )}
        </>
      )}
    </InView>
  );
}
