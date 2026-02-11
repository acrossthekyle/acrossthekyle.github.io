'use client';

import { X } from 'lucide-react';
import { Ref, SyntheticEvent } from 'react';

import Kbd from '../../keyboard';

import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  id: string;
  isOpen: boolean;
  onCancel: (event: SyntheticEvent<HTMLDialogElement>) => void;
  onClose: () => void;
  ref: Ref<HTMLDialogElement | null>;
};

export default function Dialog({
  children,
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
      className={`${styles.container} ${isOpen ? 'is-active' : ''}`.trim()}
      id={id}
      ref={ref}
      onCancel={onCancel}
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
      <p id="hint" className={styles.hint}>
        Press <Kbd>ESC</Kbd> to close
      </p>
    </dialog>
  );
}
