'use client';

import { ArrowUp, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { useEvent } from '@/hooks/useEvent';

import styles from './stylesheet';

export default function Toggle() {
  const router = useRouter();

  const handleOnClose = () => {
    router.back();
  };

  const handleOnScrollToTop = () => {
    const element = document.getElementById('dialog');

    if (element) {
      element.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  };

  useEvent('onEscape', () => {
    handleOnClose();
  });

  return (
    <>
      <button
        className={styles.close}
        onClick={handleOnClose}
        title="Close"
        type="button"
      >
        <X className={styles.icon} />
      </button>
      <button
        className={styles.up}
        onClick={handleOnScrollToTop}
        title="Scroll to top"
        type="button"
      >
        <ArrowUp className={styles.icon} />
      </button>
    </>
  );
}
