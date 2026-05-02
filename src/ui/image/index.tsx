'use client';

import NextJsImage from 'next/image';
import { useState } from 'react';

import styles from './stylesheet';

type Props = {
  className?: string;
  priority?: boolean;
  size: string;
  src: string;
};

export default function Image({
  className = '',
  priority,
  size,
  src,
}: Props) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <NextJsImage
      alt=""
      className={`${className} ${styles.skeleton(isLoaded)}`}
      draggable="false"
      height={432}
      key={src}
      onLoad={() => setIsLoaded(true)}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/2wBDAFA3PEY8MlBGQUZaVVBfeMiCeG5uePWvuZHI////////////////////////////////////////////////////2wBDAVVaWnhpeOuCguv/////////////////////////////////////////////////////////////////////////wAARCAAGAAoDAREAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAQL/xAAYEAEAAwEAAAAAAAAAAAAAAAABAAIxEv/EABQBAQAAAAAAAAAAAAAAAAAAAAL/xAAXEQEAAwAAAAAAAAAAAAAAAAAAAREx/9oADAMBAAIRAxEAPwAag5sE4aeSGyf/2Q=="
      sizes={size === 'large' ? '50vw' : '33vw'}
      loading={priority ? 'eager' : 'lazy'}
      src={src}
      width={768}
    />
  );
}
