'use client';

import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';

import styles from './stylesheet';

export default function Toggle() {
  const router = useRouter();

  const handleOnClose = () => {
    router.back();
  };

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
