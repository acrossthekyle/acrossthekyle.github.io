'use client';

import Context from '../context';
import Image from '../image';
import Placeholder from '../placeholder';
import Skeleton from '../skeleton';

type Props = {
  alt: string;
  height: number;
  sizes: string;
  src: string;
  width: number;
}

export default function Container({
  alt,
  children,
  height,
  sizes,
  src,
  width,
}: React.PropsWithChildren<Props>) {
  return (
    <Context src={src}>
      <Placeholder>
        <Image
          alt={alt}
          height={height}
          sizes={sizes}
          width={width}
        />
        <Skeleton />
        {children}
      </Placeholder>
    </Context>
  );
}
