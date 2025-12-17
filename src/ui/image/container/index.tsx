'use client';

import Context from '../context';
import Image from '../image';
import Placeholder from '../placeholder';
import Skeleton from '../skeleton';

type Props = {
  alt: string;
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
  color?: boolean;
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
  color,
  height,
  index,
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
          color={color}
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
