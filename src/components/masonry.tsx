'use client';

import { useCallback, useState } from 'react';

import Styles from '@/styles';
import type { Components } from '@/types';

import Button from './button';
import Article from './masonry.article';

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
      {[...items]
        .splice(0, shown)
        .map((item: Components.MasonryItem, index) => (
          <Article {...item} key={`key-${index}`} />
        ))}
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
