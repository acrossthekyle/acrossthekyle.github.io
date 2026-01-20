'use client';

import { X } from 'lucide-react';

import styles from './stylesheet';

type Props = {
  id: string;
  onClose: () => void;
};

export default function Close({ id, onClose }: Props) {
  return (
    <button
      aria-controls={id}
      aria-label={`exit ${id}`}
      autoFocus
      className={styles.close}
      onClick={onClose}
      type="button"
    >
      <X />
    </button>
  );
}
