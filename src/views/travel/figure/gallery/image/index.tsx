'use client';

import NextJsImage from 'next/image';

import { useModel } from './model';
import styles from './stylesheet';

type Props = {
  imageFilter?: string;
  isActive: boolean;
  isFullscreen?: boolean;
  isInView?: boolean;
  isPlaceholder?: boolean;
  quality?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref?: React.RefObject<any> | ((node?: Element | null | undefined) => void);
  src: string;
};

export default function Image({
  imageFilter,
  isActive,
  isFullscreen = false,
  isInView = false,
  isPlaceholder = false,
  quality = 100,
  ref,
  src,
}: Props) {
  const { handleOnLoad, isLoading } = useModel(src);

  return (
    <>
      <NextJsImage
        alt=""
        className={styles.image(
          isInView,
          isActive,
          isFullscreen,
          isPlaceholder,
          imageFilter,
        )}
        height={1080}
        onLoad={handleOnLoad}
        quality={quality}
        ref={ref}
        sizes="100vw"
        src={src}
        width={1920}
      />
      {isLoading && !isFullscreen && (
        <div
          aria-hidden="true"
          className={styles.skeleton}
        >
          <div className={styles.pulse} />
        </div>
      )}
    </>
  );
}
