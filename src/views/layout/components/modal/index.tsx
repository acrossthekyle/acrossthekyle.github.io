'use client';

import { X } from 'lucide-react';
import FocusLock from 'react-focus-lock';

import { useModal } from '@/hooks/useModal';

import styles from './stylesheet';

export default function Modal() {
  const {
    content,
    handleOnClose,
    isCloseable,
    isOpen,
    size,
  } = useModal();

  return (
    <div
      className={styles.dialog}
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
    >
      <button
        aria-hidden="true"
        className={styles.backdrop(isOpen)}
        onClick={handleOnClose}
        type="button"
      />
      <div className={styles.container(isOpen)}>
        <div className={styles.wrapper}>
          <FocusLock disabled={!isOpen}>
            <div
              className={styles.content(isOpen, size)}
              tabIndex={-1}
            >
              {isCloseable && (
                <button
                  className={styles.close}
                  onClick={handleOnClose}
                  type="button"
                >
                  <X className={styles.icon} />
                </button>
              )}
              {content}
            </div>
          </FocusLock>
        </div>
      </div>
    </div>
  );
}
