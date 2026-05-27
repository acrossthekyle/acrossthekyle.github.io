'use client';

import { useDialog } from '@/hooks/useDialog';
import type { Data } from '@/types';
import { Ui } from '@/ui';
import { padIndex } from '@/utils';

import styles from './stylesheet';

type Props = {
  child: number;
  image: Data;
  index: number;
  parent: number;
};

export default function Image({ child, image, index, parent }: Props) {
  const { onDialog } = useDialog();

  const handleOnClick = () => {
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
    <figure
      className={styles.figure(parent, child)}
    >
      <button
        aria-label="view image details"
        className={styles.cta}
        onClick={handleOnClick}
        type="button"
      >
        <Ui.Image
          className={styles.image}
          src={image.src}
          thumb={image.thumb}
        />
      </button>
      <figcaption className={styles.caption}>
        <span className={styles.when}>{image.when}</span>
        <span className={styles.key}>{padIndex(index)}</span>
      </figcaption>
    </figure>
  );
}
