'use client';

import { useState } from 'react';

import Image from './image';
import styles from './stylesheet';

type Props = {
  images: Array<{
    index: string;
    location: string;
    src: string;
  }>;
  total: string;
};

export default function Snapshots({ images, total }: Props) {
  const [canShowAll, setCanShowAll] = useState(images.length > 6 ? false : true);

  const handleOnViewMore = () => {
    setCanShowAll(previous => !previous);
  };

  return (
    <div className={styles.container}>
      <h2>
        <strong>Images</strong>
      </h2>
      {images.length > 6 && (
        <button
          className={styles.view}
          onClick={handleOnViewMore}
          type="button"
        >
          {!canShowAll ? 'View all' : 'Reset'}
        </button>
      )}
      <ul className={styles.images(canShowAll)}>
        {images.map((image, index: number) => (
          <li className={styles.image(index, total)} key={image.index}>
            <Image
              location={image.location}
              index={image.index}
              src={image.src}
              total={total}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
