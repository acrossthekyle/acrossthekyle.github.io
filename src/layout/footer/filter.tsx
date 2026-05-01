'use client';

import { Info, Undo2 } from 'lucide-react';

import { useDialog } from '@/hooks/useDialog';
import { useFilter } from '@/hooks/useFilter';
import { useView } from '@/hooks/useView';
import type { Album } from '@/types';

import styles from './stylesheet';

type Props = {
  data: Album[];
};

type MetaData = {
  album?: Album;
  albums?: number;
  images: number;
  label: string;
};

const NOT_FOUND = 'Not Found';

function getMetaData(
  data: Album[],
  filterId: string | null,
  filterType: string | null,
): MetaData {
  if (filterType === 'category') {
    const filtered = data.filter(({ category }) =>
      category.toLowerCase() === (filterId || '').toLowerCase()
    );

    return {
      albums: filtered.length,
      images: filtered.reduce((sum, album) => sum + album.images.length, 0),
      label: filtered.length > 0 ? filtered[0].category : NOT_FOUND,
    };
  }

  if (filterType === 'album') {
    const filtered = data.find(({ id }) => id === (filterId || ''));

    return {
      album: filtered,
      images: filtered?.images.length || 0,
      label: filtered?.title || NOT_FOUND,
    };
  }

  return {
    images: 0,
    label: NOT_FOUND,
  };
}

export default function Filter({ data }: Props) {
  const { onDialog } = useDialog();
  const {
    filterId,
    filterIsFromSearch,
    filterType,
    filterView,
    isFiltering,
    onUnfilter,
  } = useFilter();
  const { onView, view } = useView();

  const handleOnReset = () => {
    if (filterView) {
      onView(filterView);
    }

    onUnfilter();
  };

  const handleOnInfo = (meta: MetaData) => {
    onDialog({
      data: {
        album: meta.album,
        category: filterType !== 'album' ? {
          albums: meta.albums || 0,
          images: meta.images,
          label: meta.label,
        } : undefined,
      },
      template: 'filtering',
    });
  };

  if (view !== 'library' || !isFiltering) {
    return <div />;
  }

  const meta = getMetaData(data, filterId, filterType);

  if (meta.label === NOT_FOUND) {
    return <div />;
  }

  const canRenderInfo = (filterView === 'albums' && filterIsFromSearch) || filterView === 'library';

  return (
    <section
      aria-label="filter and info controls"
      className={styles.filters}
    >
      <button
        aria-label={`remove ${meta.label} filter`}
        className={styles.button(true)}
        onClick={handleOnReset}
        type="button"
      >
        <Undo2 className={styles.icon} />
      </button>
      {canRenderInfo && (
        <button
          aria-label={`${meta.label} info`}
          className={styles.button(true)}
          onClick={() => handleOnInfo(meta)}
          type="button"
        >
          <Info className={styles.icon} />
        </button>
      )}
    </section>
  );
}
