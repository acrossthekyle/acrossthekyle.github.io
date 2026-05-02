'use client';

import { useSize } from '@/hooks/useSize';

import styles from './stylesheet';

type Props = {
  isActive: boolean;
  onToggle: () => void;
};

export default function Toggles({ isActive, onToggle }: Props) {
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
        Details
      </button>
    </div>
  );
}
