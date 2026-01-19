'use client';

import { X } from 'lucide-react';

import Navigation from '../navigation';

import { useModel } from './model';
import styles from './stylesheet';

type Props = {
  route: string;
};

export default function Dialog({ route }: Props) {
  const {
    dialogRef,
    handleOnDialogCancel,
    handleOnDialogClose,
    handleOnDialogOpen,
    isDialogActive,
  } = useModel();

  return (
    <>
      <button
        aria-controls="nav"
        aria-label="open menu dialog"
        className={styles.open}
        onClick={handleOnDialogOpen}
        type="button"
      >
        Menu
      </button>
      <dialog
        className={`${styles.dialog} ${isDialogActive ? 'is-active' : ''}`.trim()}
        id="nav"
        ref={dialogRef}
        onCancel={handleOnDialogCancel}
      >
        <header className={styles.header}>
          <h2>
            <strong>Menu</strong>
          </h2>
          <button
            aria-controls="nav"
            aria-label="exit menu"
            autoFocus
            className={styles.close}
            onClick={handleOnDialogClose}
            type="button"
          >
            <X />
          </button>
        </header>
        <Navigation className={styles.list} route={route} />
        <footer className={styles.footer}>
          <kbd className={styles.kbd}>Esc</kbd>
        </footer>
      </dialog>
    </>
  );
}
