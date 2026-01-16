'use client';

import NextJsImage from 'next/image';
import { useContext } from 'react';

import { ImageContext } from '../context';
import styles from './stylesheet';

type Props = {
  alt: string;
  className?: string;
  height: number;
  index?: number;
  sizes: string;
  width: number;
};

export default function Image({
  alt,
  className = '',
  height,
  index,
  sizes,
  width,
}: Props) {
  const {
    onLoad,
    src,
  } = useContext(ImageContext);

  return (
    <NextJsImage
      alt={alt}
      className={`${styles.image(index)} ${className}`.trim()}
      height={height}
      onLoad={onLoad}
      sizes={sizes}
      src={src}
      width={width}
    />
  );
}
