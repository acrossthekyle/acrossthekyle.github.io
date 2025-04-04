'use client';

import { ReactNode, useState } from 'react';

import styles from '@/styles/components/masonry.module.scss';
import type { MasonryItem } from '@/types';

import Button from './button';

const PAGE_SIZE = 9;

type Props = {
  items: MasonryItem[];
  renderItem: (item: MasonryItem, index: number) => ReactNode;
};

function Masonry({ items, renderItem }: Props) {
  const [shown, setShown] = useState(PAGE_SIZE);

  const handleOnViewMore = () => {
    const more = shown + PAGE_SIZE;

    setShown(more);
  };

  return (
    <div className={styles.masonry} id="masonry">
      <div className={styles.items}>
        {[...items].splice(0, shown).map((item, index) => (
          <div className={styles.item} key={`key-${index}`}>
            {renderItem(item, index)}
          </div>
        ))}
      </div>
      {shown < items.length && (
        <div className={styles.footer}>
          <Button
            className={styles.more}
            mode="secondary"
            onClick={handleOnViewMore}
            text="Load More"
          />
        </div>
      )}
    </div>
  );
}

export default Masonry;
