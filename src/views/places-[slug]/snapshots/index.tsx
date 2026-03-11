'use client';

import Link from 'next/link';
import { useState } from 'react';

import { Image } from '@/ui/image';
import { Heading, Strong } from '@/ui/typography';

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
    ? (canShowAll ? images : images.slice(0, 6))
    : images;

  return (
    <>
      <Heading level={2} id="images">
        <Strong uppercase>Gallery</Strong>
      </Heading>
      <ul aria-labelledby="images" className={styles.images}>
        {items.map((item, index: number) => (
          <li className={styles.image(index, Number(total))} key={item.index}>
            <Link href={`/images/places/${slug}/${item.index}`}>
              <Image src={item.src} />
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
          <Strong>
            {`[${canShowAll ? '-' : '+'}] ${!canShowAll ? 'View all images' : 'View less'}`}
          </Strong>
        </button>
      )}
    </>
  );
}
