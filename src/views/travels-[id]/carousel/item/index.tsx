'use client';

import { useInView } from 'react-intersection-observer';

import type { Image } from '@/types';
import { Ui } from '@/ui';
import { pad } from '@/utils';

import { styles } from './stylesheet';

type Props = {
  image: Image;
  index: number;
  onInView: (index: number) => void;
  total: number;
};

export default function Item({ image, index, onInView, total }: Props) {
  const { ref, inView } = useInView({
    threshold: 0.5,
    onChange: (isInView: boolean) => {
      if (isInView) {
        onInView(index);
      }
    },
  });

  return (
    <li
      className={styles.item}
      id={`slide-${index}`}
    >
      <figure className={styles.figure} ref={ref}>
        <Ui.Image
          className={styles.thumbnail(inView)}
          src={image.src}
          thumb={image.thumb}
        />
        <figcaption className={styles.caption}>
          <span className={styles.eyebrow}>
            {pad(index + 1)} of {pad(total)}
          </span>
          <span className={styles.label}>
            {image.title || image.location.region}
          </span>
          <span className={styles.lid}>
            <Ui.Units.Length isSmall value={image.elevation} />
          </span>
        </figcaption>
      </figure>
    </li>
  );
}
