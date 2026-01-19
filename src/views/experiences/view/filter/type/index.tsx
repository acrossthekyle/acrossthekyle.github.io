'use client';

import { X } from 'lucide-react';

import { useDialog } from '@/hooks/useDialog';

import Cta from '../cta';

import styles from './stylesheet';

type Props = {
  current: string;
  options: Array<{ value: string; count: number; }>;
  onClick: (value: string) => void;
};

export default function Type({ current, options, onClick }: Props) {
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
        <u><em>{current}{current === 'everything' ? '' : 's'}</em></u>
      </button>
      <dialog
        className={`${styles.dialog} ${isOpen ? 'is-active' : ''}`.trim()}
        id="types"
        ref={dialog}
        onCancel={handleOnCancel}
      >
        <header>
          <h2>
            <strong>Filter by</strong>
            <small>Type of experience</small>
          </h2>
          <button
            aria-controls="types"
            aria-label="exit types"
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
              count={20}
              current={current}
              expected="everything"
              onClick={onClick}
            />
          </li>
          {options.map(({ count, value }) => (
            <li key={value}>
              <Cta
                count={count}
                current={current}
                expected={value}
                onClick={onClick}
              />
            </li>
          ))}
        </ul>
        <footer className={styles.footer}>
          <kbd className={styles.kbd}>Esc</kbd>
        </footer>
      </dialog>
    </div>
  );
}
