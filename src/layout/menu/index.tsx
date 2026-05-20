'use client';

import {
  Equal,
  GripHorizontal,
  LensConcave,
  TextCursorInput,
} from 'lucide-react';

import { useDialog } from '@/hooks/useDialog';
import { useFilter } from '@/hooks/useFilter';
import { useView } from '@/hooks/useView';
import type { Collection } from '@/types';

import Color from './color';
import styles from './stylesheet';
import Theme from './theme';

type Props = {
  collections: Collection[];
};

export default function Menu({ collections }: Props) {
  const { onClose, onDialog } = useDialog();
  const { filter, onFilter } = useFilter();
  const { view, onView } = useView();

  const handleOnChange = (value: string) => {
    onView(value);

    onClose();

    if (filter !== null) {
      onFilter(null);
    }
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

  const isCollectionsActive = view === 'collections' || view === 'collection';
  const isLibraryActive = !isCollectionsActive;

  return (
    <>
      <button
        aria-label="switch to collections view"
        className={`${styles.button(isCollectionsActive)} ${styles.first}`}
        onClick={() => handleOnChange('collections')}
        type="button"
      >
        <LensConcave className={`${styles.icon} ${styles.rotate}`} />
        Collections
      </button>
      <button
        aria-label="switch to all photos view"
        className={styles.button(isLibraryActive)}
        onClick={() => handleOnChange('library')}
        type="button"
      >
        <GripHorizontal className={styles.icon} />
        Library
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
      <Theme />
      <Color />
    </>
  );
}
