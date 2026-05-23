'use client';

import { useDialog } from '@/hooks/useDialog';

import styles from './stylesheet';
import { Image } from './templates';

export default function Dialog() {
  const {
    data,
    dialog,
    isClosing,
    isOpen,
    onBackdrop,
    onCancel,
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
      <div className={styles.inner(isOpen, isClosing)}>
        <Image data={data.data} />
      </div>
    </dialog>
  );
}
