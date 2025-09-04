'use client';

import NextJsImage from 'next/image';

import type { Stage } from '@/types';

import { useModel } from './model';
import styles from './stylesheet';

type Props = {
  stage: Stage;
};

export default function Image({ stage }: Props) {
  const { handleOnLoad, isLoading } = useModel(stage);

  return (
    <>
      <NextJsImage
        alt={
          !stage.termini.isSame
            ? `${stage.termini.start.join(' ')} To ${stage.termini.end.join(' ')}`
            : (stage.location || 'travel image')
        }
        className={styles.image}
        height={1080}
        onLoad={handleOnLoad}
        sizes="100vw"
        src={stage.images.hero}
        width={1920}
      />
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
