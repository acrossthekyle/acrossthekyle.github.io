'use client';

import NextJsImage from 'next/image';
import { useContext } from 'react';

import { ImageContext } from '../context';

type Props = {
  alt: string;
  height: number;
  sizes: string;
  src: string;
  width: number;
};

export default function Image({
  alt,
  height,
  sizes,
  src,
  width,
}: Props) {
  const { onLoad } = useContext(ImageContext);

  return (
    <NextJsImage
      alt={alt}
      height={height}
      onLoad={onLoad}
      sizes={sizes}
      src={src}
      width={width}
    />
  );
}
