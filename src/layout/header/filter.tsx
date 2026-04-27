'use client';

import { X } from 'lucide-react';

import { useFilter } from '@/hooks/useFilter';
import { useView } from '@/hooks/useView';
import type { Album } from '@/types';

import styles from './stylesheet';

type Props = {
  data: Album[];
};

function getMetaData(
  data: Album[],
  filterId: string | null,
  filterType: string | null,
) {
  if (filterType === 'category') {
    const filtered = data.filter(({ category }) =>
      category.toLowerCase() === (filterId || '').toLowerCase()
    );

    return {
      count: filtered.reduce((sum, album) => sum + album.images.length, 0),
      label: filtered.length > 0 ? filtered[0].category : 'Not Found',
    };
  }

  if (filterType === 'album') {
    const filtered = data.find(({ id }) => id === (filterId || ''));

    return {
      count: filtered?.images.length || 0,
      label: filtered?.title || 'Not Found',
    };
  }

  return {
    count: 0,
    label: 'Not Found',
  };
}

export default function Filter({ data }: Props) {
  const { filterId, filterType, isFiltering, onUnfilter } = useFilter();
  const { view } = useView();

  const handleOnReset = () => {
    onUnfilter();
  };

  if (!isFiltering) {
    return null;
  }

  const meta = getMetaData(data, filterId, filterType);

  return (
    <button
      aria-label={`filtering by ${meta.label}, remove filter`}
      className={styles.filter(view === 'library')}
      onClick={handleOnReset}
      type="button"
    >
      <span className={styles.prefix}>
        <X className={styles.icon} />
        {meta.label}:
      </span>
      <span>
        {meta.count} images
      </span>
    </button>
  );
}
