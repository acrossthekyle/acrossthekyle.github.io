'use client';

import { RefObject, forwardRef, useEffect, useState } from 'react';
import NextJsImage, { ImageProps } from 'next/image';

import Constants from '@/constants';
import Styles from '@/styles';

const scss = Styles.Components.Image;

type TransformableProps = {
  canTransform: boolean;
  children: React.ReactNode | React.ReactNode[];
};

const Transformable = ({ canTransform, children }: TransformableProps) => {
  if (canTransform) {
    return (
      <figure className={scss.image} data-can-transform={canTransform}>
        {children}
      </figure>
    );
  }

  return <>{children}</>;
};

const Image = forwardRef(function UiImage(
  {
    canTransform = true,
    src,
    ...rest
  }: ImageProps & {
    canTransform?: boolean;
  },
  ref?: RefObject<HTMLImageElement>,
) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
  }, [src]);

  return (
    <Transformable canTransform={canTransform}>
      <NextJsImage
        quality={80}
        {...rest}
        onLoad={() => setIsLoaded(true)}
        loader={({ src, width, quality }) =>
          `${src}${src.includes('updatedAt') ? '&' : '?'}tr=w-${width}&q-${quality}`
        }
        ref={ref}
        src={`${Constants.IMAGE_BASE_URL}${src}`}
      />
      {!isLoaded && <div aria-hidden="true" className={scss.skeleton} />}
    </Transformable>
  );
});

export default Image;
