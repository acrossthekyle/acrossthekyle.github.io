'use client';

import { CirclePlus } from 'lucide-react';
import Image from 'next/image';

import type { Stage } from '@/types';

import styles from './timeline.stylesheet';

type Props = {
  stage: Stage;
};

export default function Card({ stage }: Props) {
  return (
    <li className={styles.stage}>
      <figure className={styles.figure}>
        <button
          className={styles.button}
          onClick={() => {}}
          type="button"
        >
          <Image
            alt=""
            className={styles.image}
            height="1080"
            src={stage.images.hero}
            width="1920"
          />
        </button>
        <figcaption className={styles.caption}>
          <p className={styles.eyebrow}>
            <span className={styles.index}>
              {String(stage.index + 1).padStart(3, '0')}
            </span>
            {!stage.termini.isSame && (
              <>
                - From {stage.termini.start} to
              </>
            )}
          </p>
          <h3 className={styles.title}>{stage.termini.end}</h3>
        </figcaption>
      </figure>

      {stage.hasStats && (
        <button
          className={styles.details}
          onClick={() => {}}
          type="button"
        >
          <CirclePlus className={styles.icon} />
        </button>
      )}
    </li>
  );
}
