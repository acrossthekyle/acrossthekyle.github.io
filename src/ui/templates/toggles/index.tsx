'use client';

import { Maximize, Minimize, Shrink } from 'lucide-react';

import { useSize } from '@/hooks/useSize';

import styles from './stylesheet';

type Props = {
  isActive: boolean;
  onClose: () => void;
  onToggle: () => void;
};

export default function Toggles({ isActive, onClose, onToggle }: Props) {
  const { size } = useSize();

  if (size === 'full') {
    return null;
  }

  return (
    <div className={styles.container}>
      <button
        aria-label="toggle image caption"
        aria-expanded={isActive}
        aria-controls="template-caption"
        className={styles.button}
        onClick={onToggle}
        type="button"
      >
        {isActive ? (
          <Minimize className={styles.icon} />
        ) : (
          <Maximize className={styles.icon} />
        )} Details
      </button>
      <button
        aria-label="close image"
        className={styles.button}
        onClick={onClose}
        type="button"
      >
        <Shrink className={styles.icon} /> Close
      </button>
    </div>
  );
}
