'use client';

import { GripHorizontal, LensConcave, TextCursorInput } from 'lucide-react';
import { useEffect } from 'react';

import { useDialog } from '@/hooks/useDialog';
import { useFilter } from '@/hooks/useFilter';
import { useView } from '@/hooks/useView';
import type { Album } from '@/types';

import styles from './stylesheet';

type Props = {
  data: Album[];
};

export default function Controls({ data }: Props) {
  const { onOpen } = useDialog();
  const { isFiltering, onUnfilter } = useFilter();
  const { view, onView } = useView();

  useEffect(() => {
    if (isFiltering) {
      onView('library');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOnChange = (value: string) => {
    onView(value);

    if (isFiltering) {
      onUnfilter();
    }

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  };

  const handleOnSearch = () => {
    onOpen({
      data: {
        albums: data,
      },
      template: 'search',
    });
  };

  return (
    <section
      aria-label="display controls"
      className={styles.controls(!isFiltering)}
    >
      <div className={styles.group}>
        <button
          aria-label="switch to slider view"
          className={`${styles.button(view === 'albums')} ${styles.first}`}
          onClick={() => handleOnChange('albums')}
          type="button"
        >
          <LensConcave className={`${styles.icon} ${styles.rotate}`} />
          Albums
        </button>
        <button
          aria-label="switch to grid view"
          className={styles.button(view === 'library')}
          onClick={() => handleOnChange('library')}
          type="button"
        >
          <GripHorizontal className={styles.icon} />
          Library
        </button>
        <button
          aria-label="enable search dialog"
          className={`${styles.button(false)} ${styles.last}`}
          onClick={handleOnSearch}
          type="button"
        >
          <TextCursorInput className={styles.icon} />
          Find
        </button>
      </div>
    </section>
  );
}
