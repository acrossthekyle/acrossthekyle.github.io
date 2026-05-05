'use client';

import { Bookmark } from 'lucide-react';

import { useFilter } from '@/hooks/useFilter';
import { useView } from '@/hooks/useView';
import type { Data } from '@/types';

import styles from './stylesheet';

type Props = {
  images: Data[];
};

export default function Filters({ images }: Props) {
  const { onView } = useView();
  const { filter, onFilter } = useFilter();

  const handleOnChoose = (category: string | null) => {
    if (category === null) {
      onFilter(null);

      onView('library');

      return;
    }

    onFilter(category);

    onView('category');
  };

  const categories = [...new Set(images.map(({ category }) => category))];

  return (
    <section aria-label="filter photos by category" className={styles.options}>
      <ul className={styles.categories}>
        <li>
          <button
            aria-label="view all categories"
            className={styles.category(filter === null)}
            onClick={() => handleOnChoose(null)}
            type="button"
          >
            <Bookmark className={styles.tag} /> All
          </button>
        </li>
        {categories.map((category) => (
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
    </section>
  );
}
