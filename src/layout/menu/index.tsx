'use client';

import { useMenu } from '@/hooks/useMenu';

import styles from './stylesheet';
import Content from './content';

export default function Menu() {
  const {
    instance,
    isActive,
    onBackdrop,
    onCancel,
    onClose,
  } = useMenu();

  return (
    <dialog
      aria-labelledby="dialog-header"
      className={`${styles.container} ${isActive ? 'is-active' : ''}`.trim()}
      closedby="none"
      id="menu"
      onClick={onBackdrop}
      ref={instance}
      onKeyDown={onCancel}
    >
      <button
        className={styles.close(isActive)}
        onClick={onClose}
        type="button"
      >
        <span className={styles.top(isActive)} />
        <span className={styles.bottom(isActive)} />
      </button>
      <div className={styles.inner}>
        <Content />
      </div>
    </dialog>
  );
}
