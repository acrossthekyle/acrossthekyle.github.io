'use client';

import { Maximize } from 'lucide-react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

import type { Stage } from '@/types';

import { useModel } from './model';
import styles from './stylesheet';
import { getThreshold } from './utils';

type Props = {
  stage: Stage;
};

export default function Gallery({ stage }: Props) {
  const { handleOnLoad, handleOnMaximize, isLoading, zoomRef } = useModel(stage);

  const { ref, inView } = useInView({
    threshold: getThreshold(zoomRef),
  });

  return (
    <>
      <Image
        alt=""
        className={styles.image(false, true)}
        height={1080}
        quality={10}
        ref={ref}
        sizes="100vw"
        src={stage.images.hero}
        width={1920}
      />
      <Image
        alt=""
        className={styles.image(inView, false)}
        height={1080}
        onLoad={handleOnLoad}
        ref={zoomRef}
        sizes="100vw"
        src={stage.images.hero}
        width={1920}
      />
      <button
        className={styles.maximize(inView)}
        onClick={handleOnMaximize}
        type="button"
      >
        <Maximize />
      </button>
      {isLoading && (
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
