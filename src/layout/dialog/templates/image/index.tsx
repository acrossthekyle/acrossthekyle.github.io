'use client';

import {
  Maximize,
  Minimize,
} from 'lucide-react';
import { useEffect } from 'react';

import { useDialog } from '@/hooks/useDialog';
import { useSize } from '@/hooks/useSize';
import type { Data } from '@/types';
import { Ui } from '@/ui';

import styles from './stylesheet';

type Props = {
  data?: {
    image?: Data;
  };
};

export default function Template({ data }: Props) {
  const { onDone } = useDialog();
  const { onSize, size } = useSize();

  useEffect(() => {
    onDone(() => {
      onSize('reset');
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onDone, size]);

  if (!data?.image) {
    return null;
  }

  return (
    <figure className={styles.container}>
      <Ui.Image
        className={styles.image(size)}
        priority
        size="large"
        src={data.image.src}
        thumb={data.image.thumb}
      />
      <button
        aria-label={size === 'full' ? 'shrink image' : 'maximize image'}
        className={styles.toggle}
        onClick={() => onSize()}
        type="button"
      >
        {size === 'full' ? (
          <Minimize className={styles.icon} />
        ) : (
          <Maximize className={styles.icon} />
        )}
      </button>
      <figcaption className={styles.caption}>
        <h2 className={styles.header}>{data.image.title}</h2>
        <ul className={styles.lid}>
          <li>
            {data.image.location.region}, {data.image.location.country}
          </li>
          <li role="presentation">•</li>
          <li>
            <Ui.Units.Length isSmall value={data.image.elevation} />
          </li>
          <li role="presentation">•</li>
          <li>
            {data.image.camera}
          </li>
        </ul>
      </figcaption>
    </figure>
  );
}
