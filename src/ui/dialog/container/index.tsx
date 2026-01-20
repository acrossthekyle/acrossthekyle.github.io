'use client';

import { Ref, SyntheticEvent } from 'react';

import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  id: string;
  isOpen: boolean;
  onCancel: (event: SyntheticEvent<HTMLDialogElement>) => void;
  ref: Ref<HTMLDialogElement | null>;
};

export default function Dialog({ children, id, isOpen, onCancel, ref }: Props) {
  return (
    <dialog
      className={`${styles.dialog} ${isOpen ? 'is-active' : ''}`.trim()}
      id={id}
      ref={ref}
      onCancel={onCancel}
    >
      {children}
    </dialog>
  );
}
