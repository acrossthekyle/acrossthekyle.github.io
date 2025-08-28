'use client';

import { ChevronLeft, ChevronRight, Maximize } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

import type { Stage } from '@/types';

import Image from './image';
import { useModel } from './model';
import styles from './stylesheet';
import { getThreshold } from './utils';

type Props = {
  stage: Stage;
};

export default function Gallery({ stage }: Props) {
  const {
    handleOnMaximize,
    handleOnNext,
    handleOnPrevious,
    images,
    index,
    zoomRef,
  } = useModel(stage);

  const { ref, inView } = useInView({
    threshold: getThreshold(zoomRef),
  });

  if (images.length === 0) {
    return null;
  }

  return (
    <>
      {images.length > 1 && (
        <span className={styles.index(inView)}>
          {index + 1}/{images.length}
        </span>
      )}
      <Image
        isActive
        isPlaceholder
        quality={1}
        ref={ref}
        src={images[0]}
      />
      {images.length > 1 && (
        <button
          className={`${styles.gallery(inView)} ${styles.previous}`}
          onClick={handleOnPrevious}
          type="button"
        >
          <ChevronLeft className={styles.arrow} />
        </button>
      )}
      {images.map((image: string, key: number) => (
        <Image
          isActive={index === key}
          isInView={inView}
          key={image}
          ref={index === key ? zoomRef : undefined}
          src={image}
        />
      ))}
      {images.length > 1 && (
        <button
          className={`${styles.gallery(inView)} ${styles.next}`}
          onClick={handleOnNext}
          type="button"
        >
          <ChevronRight className={styles.arrow} />
        </button>
      )}
      <button
        className={styles.toggle(inView)}
        onClick={handleOnMaximize}
        type="button"
      >
        <Maximize />
      </button>
    </>
  );
}
