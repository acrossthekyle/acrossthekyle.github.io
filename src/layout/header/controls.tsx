'use client';

import { LineDotRightHorizontal, Equal, GripHorizontal, LensConcave, TextCursorInput } from 'lucide-react';

import { useDialog } from '@/hooks/useDialog';
import { useFilter } from '@/hooks/useFilter';
import { useView } from '@/hooks/useView';
import type { Collection } from '@/types';

import styles from './stylesheet';

type Props = {
  collections: Collection[];
};

export default function Controls({ collections }: Props) {
  const { onDialog } = useDialog();
  const { filter, onFilter } = useFilter();
  const { view, onView } = useView();

  const handleOnChange = (value: string) => {
    onView(value);

    if (filter !== null) {
      onFilter(null);
    }

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  };

  const handleOnSearch = () => {
    onDialog({
      data: {
        collections,
      },
      template: 'find',
    });
  };

  const handleOnAbout = () => {
    onDialog({
      template: 'info',
    });
  };

  const handleOnOptions = () => {
    onDialog({
      template: 'options',
    });
  };

  return (
    <div className={styles.navigation(filter === null)}>
      <button
        aria-label="switch to collections view"
        className={`${styles.button(view === 'collections' || view === 'collection')} ${styles.first}`}
        onClick={() => handleOnChange('collections')}
        type="button"
      >
        <LensConcave className={`${styles.icon} ${styles.rotate}`} />
        Collections
      </button>
      <button
        aria-label="switch to all photos view"
        className={styles.button(view === 'library' || view === 'category')}
        onClick={() => handleOnChange('library')}
        type="button"
      >
        <GripHorizontal className={styles.icon} />
        All Photos
      </button>
      <button
        className={styles.button(false)}
        onClick={handleOnSearch}
        type="button"
      >
        <TextCursorInput className={styles.icon} />
        Find
      </button>
      <button
        aria-label="info about kyle"
        className={styles.button(false)}
        onClick={handleOnAbout}
        type="button"
      >
        <Equal className={styles.icon} />
        About
      </button>
      <button
        aria-label="settings"
        className={`${styles.button(false)} ${styles.last}`}
        onClick={handleOnOptions}
        type="button"
      >
        <LineDotRightHorizontal className={styles.icon} />
        Options
      </button>
    </div>
  );
}
