'use client';

import FocusLock from 'react-focus-lock';

import { useModal } from '@/hooks/useModal';

import styles from './stylesheet';

export default function Modal() {
  const {
    content,
    isOpen,
    size,
  } = useModal();

  return (
    <div
      className={styles.dialog(isOpen)}
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
      style={size ? {
        top: `${size.top}px`,
        left: `${size.left}px`,
        height: size.height,
        width: size.width,
      } : undefined}
    >
      <FocusLock className="h-full" disabled={!isOpen}>
        {content}
      </FocusLock>
    </div>
  );
}
