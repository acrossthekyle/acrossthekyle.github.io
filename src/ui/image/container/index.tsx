'use client';

import Context from '../context';
import Image from '../image';
import Skeleton from '../skeleton';

import styles from './stylesheet';

type Props = {
  alt?: string;
  className?: string;
  size?: string;
  src: string;
}

export default function Container({
  alt = '',
  children,
  className = '',
  size,
  src,
}: React.PropsWithChildren<Props>) {
  return (
    <Context src={src}>
      <Image
        alt={alt}
        className={className}
        height={432}
        sizes={`(max-width: 768px) 32vw, ${size === 'large' ? '80vw' : '28vw'}`}
        src={src}
        width={768}
      />
      <Skeleton />
      <div className={styles.overlay} />
      {children}
    </Context>
  );
}
