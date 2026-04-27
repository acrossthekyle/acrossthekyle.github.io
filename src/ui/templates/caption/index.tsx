'use client';

import { X } from 'lucide-react';

import styles from './stylesheet';

type Props = {
  canRender: boolean;
  inViewRef: (node?: Element | null) => void;
  onClose: () => void;
};

export default function Caption({
  canRender,
  children,
  inViewRef,
  onClose,
}: React.PropsWithChildren<Props>) {
  return (
    <figcaption
      className={styles.container(canRender)}
      id="template-caption"
      ref={inViewRef}
    >
      <div className={styles.inner(canRender)}>
        <button className={styles.close} onClick={onClose} type="button">
          <X className={styles.icon} />
        </button>
        {children}
      </div>
    </figcaption>
  );
}
