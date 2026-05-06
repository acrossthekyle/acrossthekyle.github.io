'use client';

import { useFilter } from '@/hooks/useFilter';
import { useView } from '@/hooks/useView';
import type { Collection as CollectionType, Data } from '@/types';

import All from './all';
import Category from './category';
import Collection from './collection';
import styles from './stylesheet';

type Props = {
  collections: CollectionType[];
  images: Data[];
};

type MetaData = {
  collection: CollectionType | null;
  collections: number;
  images: number;
};

function getInfo(
  collections: CollectionType[],
  images: Data[],
  filter: string | null,
  view: string | null,
): MetaData | null {
  if (view === 'category') {
    const filtered = collections.filter(({ category }) =>
      category.toLowerCase() === (filter || '').toLowerCase()
    );

    return {
      collection: null,
      collections: filtered.length,
      images: filtered.reduce((accumlator, { count }) => accumlator + count, 0),
    };
  }

  if (view === 'collection') {
    const filtered = collections.find(({ id }) => id === (filter || ''));

    if (!filtered) {
      return null;
    }

    return {
      collection: filtered,
      collections: 0,
      images: 0,
    };
  }

  return {
    collection: null,
    collections: collections.length,
    images: images.length,
  };
}

export default function Info({ collections, images }: Props) {
  const { filter } = useFilter();
  const { view } = useView();

  const info = getInfo(collections, images, filter, view);

  if (info === null) {
    return null;
  }

  return (
    <div className={styles.container} key={filter}>
      {view === 'category' && <Category {...info} />}
      {view === 'collection' && <Collection {...info} />}
      {view === 'library' && <All {...info} />}
    </div>
  );
}
