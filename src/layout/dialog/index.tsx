'use client';

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
