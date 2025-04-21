'use client';

import { ReactNode, useCallback, useState } from 'react';

import Styles from '@/styles';
import type { Components } from '@/types';

import Button from './button';
import Figure from './masonry.figure';

const scss = Styles.Components.Masonry;

type Props = {
  items: Components.MasonryItem[];
};

const PAGE_SIZE = 9;

function Masonry({ items }: Props) {
  const [shown, setShown] = useState(PAGE_SIZE);

  const handleOnViewMore = useCallback(() => {
    setShown(shown + PAGE_SIZE);
  }, [shown]);

  return (
    <div className={scss.masonry} id="masonry">
      <div className={scss.items}>
        {[...items]
          .splice(0, shown)
          .map((item: Components.MasonryItem, index) => (
            <div className={scss.item} key={`key-${index}`}>
              <Figure {...item} />
            </div>
          ))}
      </div>
      {shown < items.length && (
        <div className={scss.footer}>
          <Button
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
