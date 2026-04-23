'use client';

import { X } from 'lucide-react';

import { useDialog } from '@/hooks/useDialog';

import styles from './stylesheet';
import { Album, Info, Library, Search } from './templates';

export default function Dialog() {
  const {
    data,
    dialog,
    isOpen,
    onBackdrop,
    onCancel,
    onClose,
  } = useDialog();

  return (
    <dialog
      aria-labelledby="dialog-header"
      className={`${styles.container} ${isOpen ? 'is-active' : ''}`.trim()}
      closedby="none"
      onClick={onBackdrop}
      ref={dialog}
      onKeyDown={onCancel}
    >
      <div className={styles.close}>
        <button
          aria-label="close dialog"
          className={styles.button}
          onClick={onClose}
          type="button"
        >
          <X className={styles.icon} /> Close
        </button>
      </div>
      {data.template === 'album' && (
        <Album data={data.data} />
      )}
      {data.template === 'info' && (
        <Info />
      )}
      {data.template === 'library' && (
        <Library data={data.data} />
      )}
      {data.template === 'search' && (
        <Search data={data.data} />
      )}
    </dialog>
  );
}
