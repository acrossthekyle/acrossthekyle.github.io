import { ReactNode, useState } from 'react';

import Styles from '@/styles';

import Button from './button';
import { useViewModel } from './masonry.viewModel';

const scss = Styles.Components.Masonry;

type Props = {
  items: any[];
  renderItem: (item: any, index: number) => ReactNode;
};

function Masonry({ items, renderItem }: Props) {
  const { handleOnViewMore, shown } = useViewModel();

  return (
    <div className={scss.masonry} id="masonry">
      <div className={scss.items}>
        {[...items].splice(0, shown).map((item, index) => (
          <div className={scss.item} key={`key-${index}`}>
            {renderItem(item, index)}
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
