'use client';

import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { useView } from '@/hooks/useView';
import type { Album, FilterBy } from '@/types';

import styles from './stylesheet';

type Props = {
  data: Album[];
  filterBy?: FilterBy;
};

function getMetaData(data: Album[], filterBy?: FilterBy) {
  if (!!filterBy?.category) {
    const filtered = data.filter(({ category }) => category.toLowerCase() === filterBy?.category?.toLowerCase());

    return {
      count: filtered.reduce((sum, album) => sum + album.images.length, 0),
      label: filtered.length > 0 ? filtered[0].category : '404 Not Found',
    };
  }

  if (!!filterBy?.id) {
    const filtered = data.find(({ id }) => id === filterBy?.id);

    return {
      count: filtered?.images.length || 0,
      label: filtered?.title || '404 Not Found',
    };
  }

  return {
    count: 0,
    label: '404 Not Found',
  };
}

export default function Filter({ data, filterBy }: Props) {
  const router = useRouter();

  const { current } = useView();

  const handleOnReset = () => {
    router.push('/');
  };

  const isFiltering = !!filterBy?.id || !!filterBy?.category;

  if (!isFiltering) {
    return <div />;
  }

  const meta = getMetaData(data, filterBy);

  return (
    <section
      aria-label="reset filter controls"
      className={styles.filter(current === 'library')}
    >
      <button
        className={`${styles.button(true)} ${styles.only}`}
        onClick={handleOnReset}
        type="button"
      >
        <X className={styles.icon} />
        {meta.label}: {meta.count} images
      </button>
    </section>
  );
}
