'use client';

import Context from '../context';
import Image from '../image';
import Skeleton from '../skeleton';

type Props = {
  alt?: string;
  className?: string;
  size?: string;
  src: string;
}

export default function Container({
  alt = '',
  className = '',
  size,
  src,
}: Props) {
  return (
    <Context src={src}>
      <Image
        alt={alt}
        className={className}
        height={432}
        sizes={`(max-width: 768px) 80vw, ${size === 'large' ? '80vw' : '28vw'}`}
        src={src}
        width={768}
      />
      <Skeleton />
    </Context>
  );
}
