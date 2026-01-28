'use client';

import { X } from 'lucide-react';

import styles from './stylesheet';

type Props = {
  className?: string;
  id: string;
  onClose: () => void;
};

export default function Close({ className = '', id, onClose }: Props) {
  return (
    <button
      aria-controls={id}
      aria-label={`exit ${id}`}
      autoFocus
      className={`${styles.close} ${className}`.trim()}
      onClick={onClose}
      type="button"
    >
      <X className={styles.icon} />
    </button>
  );
}
