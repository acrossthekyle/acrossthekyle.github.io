'use client';

import { v4 as uuidv4 } from 'uuid';

import { useDialog } from '@/hooks/useDialog';
import type { Data } from '@/types';
import { Ui } from '@/ui';
import { padIndex } from '@/utils';

import styles from './stylesheet';

type Props = {
  images: Array<Data[]>;
  total: number;
};

export default function Gallery({ images, total }: Props) {
  const { onDialog } = useDialog();

  const handleOnClick = (image: Data) => {
    onDialog({
      data: {
        image,
        uuid: uuidv4(),
      },
    });
  };

  let globalIndex = 0;

  return (
    <section aria-label="images" className={styles.gallery}>
      {images.map((chunk, index) => (
        <div className={styles.group} key={index}>
          {chunk.map((image, key) => {
            ++globalIndex;

            return (
              <figure className={styles.figure(index, key)} key={key}>
                <button
                  className={styles.cta}
                  onClick={() => handleOnClick(image)}
                  type="button"
                >
                  <Ui.Image
                    className={styles.image}
                    src={image.src}
                    thumb={image.thumb}
                  />
                </button>
                <figcaption className={styles.caption}>
                  <span className={styles.index}>
                    <span className={styles.strong}>
                      {padIndex(globalIndex)}
                    </span>
                    <span>/ {padIndex(total)}</span>
                  </span>
                  {image.when.split(', ').map((chunk) => (
                    <span className={styles.chunk} key={chunk}>{chunk}</span>
                  ))}
                  <span className={styles.meta}>
                    <span>{image.location.region}, {image.location.country}</span>
                    <Ui.Units.Length isSmall value={image.elevation} />
                    <span>{image.camera}</span>
                    <span>{image.src.split('-').pop()}</span>
                  </span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      ))}
    </section>
  );
}
