'use client';

import {
  // ChevronDown,
  Equal,
  GripHorizontal,
  LensConcave,
  TextCursorInput,
} from 'lucide-react';
import { useState } from 'react';

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

export default function Header({ collections }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const { onDialog } = useDialog();
  const { filter, onFilter } = useFilter();
  const { view, onView } = useView();

  const handleOnMenu = () => {
    setIsOpen(previous => !previous);
  };

  const handleOnChange = (value: string) => {
    onView(value);

    handleOnMenu();

    if (filter !== null) {
      onFilter(null);
    }
  };

  const handleOnSearch = () => {
    handleOnMenu();

    onDialog({
      data: {
        collections,
      },
      template: 'find',
    });
  };

  const handleOnAbout = () => {
    handleOnMenu();

    onDialog({
      template: 'info',
    });
  };

  // const handleOnOptions = () => {
  //   handleOnMenu();

  //   onDialog({
  //     template: 'options',
  //   });
  // };

  const isCollectionsActive = view === 'collections';
  const isLibraryActive = !isCollectionsActive;

  return (
    <header>
      {/*<button className={styles.backdrop(isOpen)} onClick={handleOnMenu} type="button">
        <div className={styles.foo} />
      </button>
      <button className={styles.toggle(isOpen)} onClick={handleOnMenu} type="button">
        <ChevronDown className={styles.icon} />
      </button>*/}
      <nav className={styles.container(isOpen)}>
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
          About Me
        </button>
        <Theme />
        <Color />
      </nav>
    </header>
  );
}
