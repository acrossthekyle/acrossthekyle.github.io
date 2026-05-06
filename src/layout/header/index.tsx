'use client';

import {
  Equal,
  GripHorizontal,
  LensConcave,
  LineDotRightHorizontal,
  TextCursorInput,
} from 'lucide-react';

import { useDialog } from '@/hooks/useDialog';
import { useFilter } from '@/hooks/useFilter';
import { useView } from '@/hooks/useView';
import type { Collection } from '@/types';

import styles from './stylesheet';

type Props = {
  collections: Collection[];
};

export default function Header({ collections }: Props) {
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

  const isCollectionsActive = view === 'collections' || view === 'collection';
  const isLibraryActive = view === 'library' || view === 'category';

  return (
    <header className={styles.container}>
      <button
        aria-label="switch to collections view"
        className={`${styles.button(isCollectionsActive)} ${styles.first}`}
        onClick={() => handleOnChange('collections')}
        type="button"
      >
        <LensConcave className={`${styles.icon} ${styles.rotate}`} />
        <span className={styles.label(isCollectionsActive)}>Collections</span>
      </button>
      <button
        aria-label="switch to all photos view"
        className={styles.button(isLibraryActive)}
        onClick={() => handleOnChange('library')}
        type="button"
      >
        <GripHorizontal className={styles.icon} />
        <span className={styles.label(isLibraryActive)}>All Photos</span>
      </button>
      <button
        className={styles.button(false)}
        onClick={handleOnSearch}
        type="button"
      >
        <TextCursorInput className={styles.icon} />
        <span className={styles.label(false)}>Find</span>
      </button>
      <button
        aria-label="info about kyle"
        className={styles.button(false)}
        onClick={handleOnAbout}
        type="button"
      >
        <Equal className={styles.icon} />
        <span className={styles.label(false)}>About Me</span>
      </button>
      <button
        aria-label="settings"
        className={`${styles.button(false)} ${styles.last}`}
        onClick={handleOnOptions}
        type="button"
      >
        <LineDotRightHorizontal className={styles.icon} />
        <span className={styles.label(false)}>Options</span>
      </button>
    </header>
  );
}
