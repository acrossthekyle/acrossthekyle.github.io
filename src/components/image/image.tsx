import { RefObject, forwardRef, useState } from 'react';
import NextJsImage, { ImageProps } from 'next/image';

import Skeleton from './skeleton';

const Image = forwardRef(function UiImage(
  props: ImageProps,
  ref?: RefObject<HTMLImageElement>,
) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <Skeleton />}
      <NextJsImage
        quality={80}
        {...props}
        onLoad={() => setIsLoaded(true)}
        loader={({ src, width, quality }) =>
          `${src}${src.includes('updatedAt') ? '&' : '?'}tr=w-${width}&q-${quality}`
        }
        ref={ref}
        src={`https://ik.imagekit.io/acrossthekyle/uploads/${props.src}`}
      />
    </>
  );
});

export default Image;
