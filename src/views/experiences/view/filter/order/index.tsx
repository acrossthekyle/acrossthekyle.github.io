'use client';

import { X } from 'lucide-react';

import { useDialog } from '@/hooks/useDialog';

import Cta from '../cta';

import styles from './stylesheet';

type Props = {
  current: string;
  onClick: (value: string) => void;
  sortBy: string;
};

export default function Order({ current, onClick, sortBy }: Props) {
  const {
    dialog,
    handleOnCancel,
    handleOnClose,
    handleOnOpen,
    isOpen,
  } = useDialog();

  return (
    <div className={styles.container}>
      <button aria-label="open list order dialog" onClick={handleOnOpen} type="button">
        <u><em>{current}</em></u>
      </button>
      <dialog
        className={`${styles.dialog} ${isOpen ? 'is-active' : ''}`.trim()}
        id="order"
        ref={dialog}
        onCancel={handleOnCancel}
      >
        <header>
          <h2>
            <strong>Order by</strong>
            <small>Ascending or descending</small>
          </h2>
          <button
            aria-controls="order"
            aria-label="exit order"
            autoFocus
            className={styles.close}
            onClick={handleOnClose}
            type="button"
          >
            <X />
          </button>
        </header>
        <ul>
          <li>
            <Cta
              current={current}
              expected="descending"
              label={sortBy === 'date' ? 'oldest to newest' : 'a to z'}
              onClick={onClick}
            />
          </li>
          <li>
            <Cta
              current={current}
              expected="ascending"
              label={sortBy === 'date' ? 'newest to oldest' : 'z to a'}
              onClick={onClick}
            />
          </li>
        </ul>
        <footer className={styles.footer}>
          <kbd className={styles.kbd}>Esc</kbd>
        </footer>
      </dialog>
    </div>
  );
}
