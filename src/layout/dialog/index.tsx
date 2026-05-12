'use client';

import { useDialog } from '@/hooks/useDialog';

import styles from './stylesheet';
import {
  Find,
  Image,
  Info,
  Menu,
} from './templates';

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
      <div className={styles.inner(isOpen)}>
        {data.template === 'menu' && (
          <Menu data={data.data} />
        )}
        {data.template === 'find' && (
          <Find data={data.data} />
        )}
        {data.template === 'image' && (
          <Image data={data.data} />
        )}
        {data.template === 'info' && (
          <Info />
        )}
      </div>
    </dialog>
  );
}
