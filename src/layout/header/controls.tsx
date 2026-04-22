'use client';

import { GripHorizontal, LensConcave, TextCursorInput } from 'lucide-react';

import { useDialog } from '@/hooks/useDialog';
import { useView } from '@/hooks/useView';
import type { Album } from '@/types';

import styles from './stylesheet';

type Props = {
  data: Album[];
};

export default function Controls({ data }: Props) {
  const { onOpen } = useDialog();
  const { current, onChange } = useView();

  const handleOnChange = (view: string) => {
    onChange(view);

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
    <section aria-label="display controls" className={styles.controls}>
      <div className={styles.group}>
        <button
          className={`${styles.button(current === 'albums')} ${styles.first}`}
          onClick={() => handleOnChange('albums')}
          type="button"
        >
          <LensConcave className={`${styles.icon} ${styles.rotate}`} />
          Albums
        </button>
        <button
          className={styles.button(current === 'library')}
          onClick={() => handleOnChange('library')}
          type="button"
        >
          <GripHorizontal className={styles.icon} />
          Library
        </button>
        <button
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
