'use client';

import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { useEvent } from '@/hooks/useEvent';

import styles from './stylesheet';

export default function Close() {
  const router = useRouter();

  useEvent('onEscape', () => {
    router.back();
  });

  return (
    <button
      className={styles.close}
      onClick={router.back}
      title="Close"
      type="button"
    >
      <X className={styles.icon} />
    </button>
  );
}
