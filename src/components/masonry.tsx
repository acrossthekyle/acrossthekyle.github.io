import { ReactNode, useState } from 'react';

import Styles from '@/styles';
import type { Components } from '@/types';

import Button from './button';
import Figure from './masonry.figure';
import { useViewModel } from './masonry.viewModel';

const scss = Styles.Components.Masonry;

type Props = {
  items: Components.MasonryItem[];
};

function Masonry({ items }: Props) {
  const { handleOnViewMore, shown } = useViewModel();

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
            className={scss.more}
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
