'use client';

import Link from 'next/link';
import { useState } from 'react';

import { Image } from '@/ui/image';

import styles from './stylesheet';

type Props = {
  images: Array<{
    index: string;
    src: string;
  }>;
  slug: string;
  total: string;
};

export default function Snapshots({ images, slug, total }: Props) {
  const [canShowAll, setCanShowAll] = useState(
    Number(total) > 6 ? false : true,
  );

  const handleOnViewMore = () => {
    setCanShowAll(previous => !previous);
  };

  const items = images.length > 6
    ? images.slice(0, canShowAll ? -1 : 6)
    : images;

  const text = `[${canShowAll ? '-' : '+'}] ${!canShowAll ? 'View all images' : 'View less'}`;

  return (
    <>
      <h2 id="images">
        <strong>GALLERY</strong>
        <small>{total} images</small>
      </h2>
      <ul aria-labelledby="images" className={styles.images}>
        {items.map((item, index: number) => (
          <li className={styles.image(index, Number(total))} key={item.index}>
            <Link href={`/images/places/${slug}/${item.index}/${item.src}`}>
              <Image
                alt=""
                height={432}
                sizes="(max-width: 768px) 32vw, 30vw"
                src={item.src}
                width={768}
              />
            </Link>
          </li>
        ))}
      </ul>
      {Number(total) > 6 && (
        <button
          aria-describedby="images"
          className={styles.view}
          onClick={handleOnViewMore}
          type="button"
        >
          <strong>{text}</strong>
        </button>
      )}
    </>
  );
}
