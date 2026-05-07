'use client';

import { Bookmark, X } from 'lucide-react';

import { useDialog } from '@/hooks/useDialog';
import { useFilter } from '@/hooks/useFilter';
import { useView } from '@/hooks/useView';

import styles from './stylesheet';

type Props = {
  data?: {
    categories?: string[];
  };
};

export default function Template({ data }: Props) {
  const { isOpen, onClose } = useDialog();
  const { filter, onFilter } = useFilter();
  const { onView } = useView();

  const handleOnChoose = (value: string | null) => {
    if (value === null) {
      onFilter(null);

      onView('library');

      onClose();

      return;
    }

    onFilter(value);

    onView('category');

    onClose();
  };

  if (!data?.categories) {
    return null;
  }

  return (
    <>
      <button
        aria-label="close options"
        className={styles.close(isOpen)}
        onClick={onClose}
        type="button"
      >
        <X className={styles.x} />
      </button>
      <div className={styles.container}>
        <h3 className={styles.heading}>Categories</h3>
        <ul className={styles.items}>
          <li>
            <button
              aria-label="view all photos"
              className={styles.category(filter === null)}
              onClick={() => handleOnChoose(null)}
              type="button"
            >
              <Bookmark className={styles.tag} /> All
            </button>
          </li>
          {data.categories.map((category) => (
            <li key={category}>
              <button
                aria-label={`view items in ${category.toLowerCase()} category`}
                className={styles.category(category.toLowerCase() === filter)}
                onClick={() => handleOnChoose(category)}
                type="button"
              >
                <Bookmark className={styles.tag} /> {category}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
