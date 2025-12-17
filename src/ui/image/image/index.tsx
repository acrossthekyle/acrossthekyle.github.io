'use client';

import NextJsImage from 'next/image';
import { useContext } from 'react';
import { useInView } from 'react-intersection-observer';

import { ImageContext } from '../context';
import styles from './stylesheet';

type Props = {
  alt: string;
  className?: string;
  color?: boolean;
  height: number;
  index?: number;
  sizes: string;
  width: number;
};

export default function Image({
  alt,
  className = '',
  color,
  height,
  index,
  sizes,
  width,
}: Props) {
  const {
    isInPortraitMode,
    onLoad,
    src,
  } = useContext(ImageContext);

  const { ref, inView } = useInView({
    threshold: isInPortraitMode ? .9 : .7,
  });

  return (
    <NextJsImage
      alt={alt}
      className={`${styles.image(inView, index, color)} ${className}`.trim()}
      height={height}
      onLoad={onLoad}
      ref={ref}
      sizes={sizes}
      src={src}
      width={width}
    />
  );
}
