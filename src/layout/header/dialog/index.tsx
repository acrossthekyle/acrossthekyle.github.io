'use client';

import { X } from 'lucide-react';

import { useDialog } from '@/hooks/useDialog';

import Navigation from '../navigation';

import styles from './stylesheet';

type Props = {
  route: string;
};

export default function Dialog({ route }: Props) {
  const {
    dialog,
    handleOnCancel,
    handleOnClose,
    handleOnOpen,
    isOpen,
  } = useDialog();

  return (
    <>
      <button
        aria-controls="nav"
        aria-label="open menu dialog"
        className={styles.open}
        onClick={handleOnOpen}
        type="button"
      >
        Menu
      </button>
      <dialog
        className={`${styles.dialog} ${isOpen ? 'is-active' : ''}`.trim()}
        id="nav"
        ref={dialog}
        onCancel={handleOnCancel}
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
            onClick={handleOnClose}
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
