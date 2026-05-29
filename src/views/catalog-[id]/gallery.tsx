'use client';

import { ArrowUpRight } from 'lucide-react';

import { useDialog } from '@/hooks/useDialog';
import type { Data } from '@/types';
import { Ui } from '@/ui';
import { padIndex } from '@/utils';

import styles from './stylesheet';

type Props = {
  images: Data[];
};

export default function Gallery({ images }: Props) {
  const { onDialog } = useDialog();

  const handleOnClick = (image: Data, index: number) => {
    onDialog({
      data: {
        image: {
          ...image,
          index,
        },
      },
    });
  };

  return (
    <section aria-label="images" className={styles.gallery}>
      <ul>
        {images.map((image, index) => (
          <li key={image.src}>
            <figure className={styles.figure}>
              <button
                className={styles.cta}
                onClick={() => handleOnClick(image, index)}
                type="button"
              >
                <Ui.Image
                  className={styles.item(index)}
                  size="large"
                  src={image.src}
                  thumb={image.thumb}
                />
              </button>
              <figcaption className={styles.caption}>
                <h3 className={styles.img}>
                  <span>IMG</span>
                  <span className={styles.index}>
                    <span className={styles.strong}>{padIndex(index + 1)}</span> / {padIndex(images.length)}
                  </span>
                </h3>
                <p className={styles.meta}>
                  <span>
                    {image.when}
                  </span>
                  <span>
                    {image.location.region} &mdash; <Ui.Units.Length isSmall value={image.elevation} />
                  </span>
                  <span>
                    {image.camera}
                  </span>
                </p>
              </figcaption>
              <ArrowUpRight aria-hidden="true" className={styles.arrow} />
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
