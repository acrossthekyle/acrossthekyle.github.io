'use client';

import NextJsImage from 'next/image';
import { useContext } from 'react';

import { ImageContext } from '../context';

type Props = {
  alt: string;
  className?: string;
  height: number;
  sizes: string;
  src: string;
  width: number;
};

export default function Image({
  alt,
  className = '',
  height,
  sizes,
  src,
  width,
}: Props) {
  const { onLoad } = useContext(ImageContext);

  return (
    <NextJsImage
      alt={alt}
      className={className}
      height={height}
      onLoad={onLoad}
      sizes={sizes}
      src={src}
      width={width}
    />
  );
}
