'use client';

import { useState } from 'react';

import tw from '@/styles';
import type { Image } from '@/types';

import Item from './item';

type Props = {
  images: Image[];
};

export default function Snapshots({ images }: Props) {
  const [active, setActive] = useState<number | null>(null);

  const handleClick = (value: number) => {
    setActive(active === value ? null : value);
  };

  return (
    <article aria-label="snapshots" className={styles.container} id="snapshots">
      <ul className={styles.items}>
        {images.map((image, index) => (
          <Item
            image={image}
            index={index}
            isExpanded={index === active}
            key={image.src}
            onClick={handleClick}
          />
        ))}
      </ul>
    </article>
  );
};

const styles = tw({
  container: `
    p-6 pb-4
    border-t border-current/12.5
  `,
  items: `
    relative
  `,
});
