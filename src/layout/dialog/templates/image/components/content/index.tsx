'use client';

import { X } from 'lucide-react';

import styles from './stylesheet';

type Props = {
  canRender: boolean;
  inViewRef: (node?: Element | null) => void;
  isCentered?: boolean;
  onClose: () => void;
};

export default function Content({
  canRender,
  children,
  inViewRef,
  isCentered,
  onClose,
}: React.PropsWithChildren<Props>) {
  return (
    <div
      className={styles.container(canRender, isCentered)}
      ref={inViewRef}
    >
      <button
        aria-label="close info"
        className={styles.backdrop(isCentered)}
        onClick={onClose}
        type="button"
      />
      <div className={styles.inner(canRender, isCentered)}>
        <button
          className={styles.close(isCentered)}
          onClick={onClose}
          type="button"
        >
          <X className={styles.icon} />
        </button>
        {children}
      </div>
    </div>
  );
}
