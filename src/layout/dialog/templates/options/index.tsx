'use client';

import { X } from 'lucide-react';

import { useDialog } from '@/hooks/useDialog';

import Images from './images';
import styles from './stylesheet';
import Theme from './theme';
import Units from './units';

export default function Template() {
  const { isOpen, onClose } = useDialog();

  return (
    <>
      <button
        aria-label="close options"
        className={styles.close(isOpen)}
        onClick={onClose}
        type="button"
      >
        <X className={styles.x} />
      </button>
      <div className={styles.container}>
        <Images />
        <Theme />
        <Units />
      </div>
    </>
  );
}
