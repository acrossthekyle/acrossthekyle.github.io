'use client';

import NextJsImage from 'next/image';
import { useContext } from 'react';
import { useInView } from 'react-intersection-observer';

import { ImageContext } from '../context';
import styles from './stylesheet';

type Props = {
  alt: string;
  className?: string;
  height: number;
  sizes: string;
  width: number;
};

export default function Image({
  alt,
  className = '',
  height,
  sizes,
  width,
}: Props) {
  const {
    isLandscapeOrientation,
    isMaximized,
    isInPortraitMode,
    onLoad,
    src,
  } = useContext(ImageContext);

  const { ref, inView } = useInView({
    threshold: isInPortraitMode ? 1 : .7,
  });

  return (
    <NextJsImage
      alt={alt}
      className={`${styles.image(isLandscapeOrientation, inView, isMaximized)} ${className}`.trim()}
      height={height}
      onLoad={onLoad}
      ref={ref}
      sizes={sizes}
      src={src}
      width={width}
    />
  );
}
