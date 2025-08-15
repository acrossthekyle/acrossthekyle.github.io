'use client';

import NextJsImage from 'next/image';

import { useModel } from './image.model';
import styles from './stylesheet';

type Props = {
  isFullscreen?: boolean;
  isInView?: boolean;
  ref: React.RejObject;
  src: string;
};

export default function Image({
  isFullscreen = false,
  isInView = false,
  ref,
  src,
}: Props) {
  const { handleOnLoad, isLoading } = useModel(src);

  return (
    <>
      <NextJsImage
        alt=""
        className={styles.image(isInView, isFullscreen)}
        height={1080}
        onLoad={handleOnLoad}
        ref={ref}
        sizes="100vw"
        src={src}
        width={1920}
      />
      {isLoading && (
        <div
          aria-hidden="true"
          className={styles.skeleton}
        />
      )}
    </>
  );
}
