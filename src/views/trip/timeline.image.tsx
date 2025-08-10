'use client';

import NextJsImage from 'next/image';
import { InView } from 'react-intersection-observer';

import { useModel } from './timeline.image.model';
import styles from './timeline.stylesheet';

type Props = {
  isActive: boolean;
  isFullscreen: boolean;
  src: string;
};

export default function Image({ isActive, isFullscreen, src }: Props) {
  const {
    handleOnInView,
    handleOnLoad,
    hasEnteredView,
    isLoading,
  } = useModel(src);

  return (
    <InView onChange={handleOnInView} threshold={1}>
      {({ ref }) => (
        <>
          <NextJsImage
            alt=""
            className={styles.image(isFullscreen, isActive, hasEnteredView)}
            height={1620}
            onLoad={handleOnLoad}
            ref={ref}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src={src}
            width={2880}
          />
          {isLoading && (
            <div
              aria-hidden="true"
              className={styles.skeleton(isFullscreen, isActive)}
            />
          )}
        </>
      )}
    </InView>
  );
}
