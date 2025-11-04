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
  index?: number;
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
  index = 0,
  sizes,
  src,
  useSpinner,
  width,
}: Props) {
  return (
    <Context src={src}>
      <Placeholder index={index}>
        <Image
          alt={alt}
          className={className}
          height={height}
          index={index}
          sizes={sizes}
          width={width}
        />
        <Skeleton useSpinner={useSpinner} />
        {children}
      </Placeholder>
    </Context>
  );
}
