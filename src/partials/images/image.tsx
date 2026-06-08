'use client';

import { useRouter } from 'next/navigation';

import type { Data } from '@/types';
import { Ui } from '@/ui';

import styles from './stylesheet';

type Props = {
  current?: string;
  image: Data;
  index: number;
};

export default function Image({ current, image, index }: Props) {
  const router = useRouter();

  const id = image.src.split('/').pop();

  const handleOnClick = () => {
    router.replace(
      `/index/${image.collectionId}/images/${id}`,
      {
        scroll: false,
      },
    );
  };

  const isActive = id === current;

  return (
    <button
      className={styles.link}
      id={id}
      onClick={handleOnClick}
      type="button"
    >
      <Ui.Image
        className={styles.image(index, isActive)}
        key={image.src}
        src={image.src}
        thumb={image.thumb}
      />
    </button>
  );
}
