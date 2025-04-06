import { RefObject, forwardRef, useState } from 'react';
import NextJsImage, { ImageProps } from 'next/image';

import Constants from '@/constants';
import Styles from '@/styles';

const scss = Styles.Components.Image;

const Image = forwardRef(function UiImage(
  props: ImageProps,
  ref?: RefObject<HTMLImageElement>,
) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <div aria-hidden="true" className={scss.skeleton} />}
      <NextJsImage
        quality={80}
        {...props}
        onLoad={() => setIsLoaded(true)}
        loader={({ src, width, quality }) =>
          `${src}${src.includes('updatedAt') ? '&' : '?'}tr=w-${width}&q-${quality}`
        }
        ref={ref}
        src={`${Constants.IMAGE_BASE_URL}${props.src}`}
      />
    </>
  );
});

export default Image;
