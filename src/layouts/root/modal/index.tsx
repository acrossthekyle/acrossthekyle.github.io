'use client';

import FocusLock from 'react-focus-lock';

import { useModal } from '@/hooks/useModal';

import styles from './stylesheet';

export default function Modal() {
  const {
    content,
    isOpen,
  } = useModal();

  return (
    <div
      className={styles.dialog}
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
    >
      <div className={styles.container(isOpen)}>
        <div className={styles.wrapper}>
          <FocusLock disabled={!isOpen}>
            <div
              className={styles.content(isOpen)}
              tabIndex={-1}
            >
              {content}
            </div>
          </FocusLock>
        </div>
      </div>
    </div>
  );
}
