'use client';

import { X } from 'lucide-react';

import { useDialog } from '@/hooks/useDialog';

import Cta from '../cta';

import styles from './stylesheet';

type Props = {
  current: string;
  onClick: (value: string) => void;
  orderBy: string;
};

export default function Sort({ current, onClick, orderBy}: Props) {
  const {
    dialog,
    handleOnCancel,
    handleOnClose,
    handleOnOpen,
    isOpen,
  } = useDialog();

  return (
    <div className={styles.container}>
      <button onClick={handleOnOpen} type="button">
        <u><em>{current}</em></u>
      </button>
      <dialog
        className={`${styles.dialog} ${isOpen ? 'is-active' : ''}`.trim()}
        id="sort"
        ref={dialog}
        onCancel={handleOnCancel}
      >
        <header>
          <h2>
            <strong>Sort by</strong>
            <small>Date or title</small>
          </h2>
          <button
            aria-controls="sort"
            aria-label="exit sort"
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
              expected="date"
              label={orderBy === 'descending' ? 'newest to oldest' : 'oldest to newest'}
              onClick={onClick}
            />
          </li>
          <li>
            <Cta
              current={current}
              expected="title"
              label={orderBy === 'descending' ? 'z to a' : 'a to z'}
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
