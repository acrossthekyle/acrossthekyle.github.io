'use client';

import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { useEvent } from '@/hooks/useEvent';

import styles from './stylesheet';

export default function Toggle() {
  const router = useRouter();

  const handleOnClose = () => {
    router.back();
  };

  useEvent('onEscape', () => {
    handleOnClose();
  });

  return (
    <button
      className={styles.close}
      onClick={handleOnClose}
      title="Close"
      type="button"
    >
      <X className={styles.icon} />
    </button>
  );
}
