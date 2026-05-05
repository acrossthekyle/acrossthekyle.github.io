'use client';

import { useDialog } from '@/hooks/useDialog';
import { useFilter } from '@/hooks/useFilter';
import { useOptions } from '@/hooks/useOptions';
import { useView } from '@/hooks/useView';
import type { Collection as CollectionType, Data } from '@/types';
import { Ui } from '@/ui';

import All from './all';
import Category from './category';
import Collection from './collection';
import Filters from './filters';
import Info from './info';

type Props = {
  collections: CollectionType[];
  images: Data[];
};

export default function Library({ collections, images }: Props) {
  const { onDialog } = useDialog();
  const { view } = useView();
  const { filter } = useFilter();
  const { color } = useOptions();

  const handleOnClick = (image: Data) => {
    onDialog({
      data: {
        image,
      },
      delay: true,
      template: 'image',
    });
  };

  return (
    <Ui.Containers.Mountable
      className="pt-18"
      isActive={view === 'library' || view === 'collection' || view === 'category'}
    >
      {(view === 'library' || view === 'category') && (
        <Filters images={images} />
      )}
      {(view === 'library' || view === 'collection' || view === 'category') && (
        <Info collections={collections} images={images} />
      )}
      {view === 'library' && (
        <All
          colorMode={color}
          images={images}
          onClick={handleOnClick}
        />
      )}
      {view === 'collection' && (
        <Collection
          colorMode={color}
          id={filter}
          images={images}
          onClick={handleOnClick}
        />
      )}
      {view === 'category' && (
        <Category
          colorMode={color}
          id={filter}
          images={images}
          onClick={handleOnClick}
        />
      )}
    </Ui.Containers.Mountable>
  );
}
