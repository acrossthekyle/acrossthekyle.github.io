'use client';

import { useState } from 'react';

import Image from './image';
import styles from './stylesheet';

type Props = {
  images: Array<{
    index: string;
    location: string;
    src: string;
    title: string;
  }>;
  total: string;
};

export default function Snapshots({ images, total }: Props) {
  const [canShowAll, setCanShowAll] = useState(images.length > 6 ? false : true);

  const handleOnViewMore = () => {
    setCanShowAll(previous => !previous);
  };

  return (
    <>
      <h2 id="images">
        <strong>Images</strong>
      </h2>
      <ul aria-labelledby="images" className={styles.images(canShowAll)}>
        {images.map((image, index: number) => (
          <li className={styles.image(index, images.length)} key={image.index}>
            <Image
              location={image.location}
              index={image.index}
              src={image.src}
              title={image.title}
              total={total}
            />
          </li>
        ))}
      </ul>
      {images.length > 6 && (
        <button
          aria-describedby="images"
          className={styles.view(canShowAll)}
          onClick={handleOnViewMore}
          type="button"
        >
          <strong>{!canShowAll ? 'View all' : 'View less'}</strong>
        </button>
      )}
    </>
  );
}
