'use client';

import NextJsImage from 'next/image';
import { useState } from 'react';

import styles from './stylesheet';

export default function Image() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <NextJsImage
        alt="Picture of Kyle Gilbert"
        className={styles.image}
        height={540}
        onLoad={() => setIsLoaded(true)}
        sizes="50vw"
        src="8ed54501-bdcb-40b7-9387-f2fc306db83d.png"
        width={960}
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
