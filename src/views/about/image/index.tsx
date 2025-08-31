'use client';

import NextJsImage from 'next/image';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

import styles from './stylesheet';

export default function Image() {
  const [isLoaded, setIsLoaded] = useState(false);

  const { ref, inView } = useInView({
    threshold: 1,
  });

  return (
    <>
      <NextJsImage
        alt=""
        className={styles.image(inView)}
        height={1080}
        onLoad={() => setIsLoaded(true)}
        ref={ref}
        sizes="100vw"
        src="2023/06/21/05769f04-5b00-4fd5-a233-55c00c9871c5.jpeg"
        width={1920}
      />
      {!isLoaded && (
        <span
          aria-hidden="true"
          className={styles.skeleton}
        >
          <span className={styles.pulse} />
        </span>
      )}
    </>
  );
}
