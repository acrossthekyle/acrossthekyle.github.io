'use client';

import Context from '../context';
import Image from '../image';
import Skeleton from '../skeleton';

import styles from './stylesheet';

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
        src={src}
        width={width}
      />
      <Skeleton />
      <div className={styles.overlay} />
      {children}
    </Context>
  );
}
