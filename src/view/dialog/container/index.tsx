'use client';

import { PropsWithChildren } from 'react';

import { useDialog } from '@/hooks/useDialog';

import styles from './stylesheet';

type Props = {
  className?: string;
  id: string;
};

export default function Dialog({
  children,
  className = '',
  id,
}: PropsWithChildren<Props>) {
  const {
    dialog,
    isOpen,
    onBackdrop,
    onCancel,
  } = useDialog();

  return (
    <dialog
      aria-describedby="hint"
      aria-labelledby="dialog-header"
      className={`${styles.container} ${className} ${isOpen ? 'is-active' : ''}`.trim()}
      closedby="none"
      id={id}
      onClick={onBackdrop}
      ref={dialog}
      onKeyDown={onCancel}
    >
      {children}
    </dialog>
  );
}
