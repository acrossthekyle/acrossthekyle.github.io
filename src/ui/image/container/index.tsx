'use client';

import Context from '../context';
import Image from '../image';
import Skeleton from '../skeleton';

type Props = {
  alt: string;
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
  height: number;
  sizes: string;
  src: string;
  width: number;
}

export default function Container({
  alt,
  children,
  className = '',
  height,
  sizes,
  src,
  width,
}: Props) {
  return (
    <Context src={src}>
      <Image
        alt={alt}
        className={className}
        height={height}
        sizes={sizes}
        width={width}
      />
      <Skeleton />
      {children}
    </Context>
  );
}
