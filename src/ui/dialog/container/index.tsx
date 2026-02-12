'use client';

import { X } from 'lucide-react';
import { KeyboardEvent, Ref } from 'react';

import { Kbd } from '../../keyboard';

import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  id: string;
  isOpen: boolean;
  onCancel: (event: KeyboardEvent<HTMLDialogElement>) => void;
  onClose: () => void;
  ref: Ref<HTMLDialogElement | null>;
};

export default function Dialog({
  children,
  className = '',
  id,
  isOpen,
  onCancel,
  onClose,
  ref,
}: Props) {
  return (
    <dialog
      aria-describedby="hint"
      aria-labelledby="dialog-header"
      className={`${styles.container} ${className} ${isOpen ? 'is-active' : ''}`.trim()}
      closedby="none"
      id={id}
      ref={ref}
      onKeyDown={onCancel}
    >
      <button
        aria-controls={id}
        aria-label={`exit ${id}`}
        autoFocus
        className={styles.close}
        onClick={onClose}
        type="button"
      >
        <X className={styles.icon} />
      </button>
      {children}
      <button id="hint" className={styles.hint} onClick={onClose} type="button">
        Close <Kbd letters="ESC" />
      </button>
    </dialog>
  );
}
