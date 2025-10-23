'use client';

import Context from '../context';
import Image from '../image';
import Placeholder from '../placeholder';
import Skeleton from '../skeleton';

type Props = {
  alt: string;
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
  height: number;
  sizes: string;
  src: string;
  useSpinner?: boolean;
  width: number;
}

export default function Container({
  alt,
  children,
  className = '',
  height,
  sizes,
  src,
  useSpinner,
  width,
}: Props) {
  return (
    <Context src={src}>
      <Placeholder>
        <Image
          alt={alt}
          className={className}
          height={height}
          sizes={sizes}
          width={width}
        />
        {children}
        <Skeleton useSpinner={useSpinner} />
      </Placeholder>
    </Context>
  );
}
