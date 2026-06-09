'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useEffect } from 'react';

import styles from './stylesheet';

export default function Back() {
  const router = useRouter();

  const handleOnBack = useCallback(() => {
    router.back();
  }, [router]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleOnBack();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleOnBack]);

  return (
    <button className={styles.container} onClick={handleOnBack} type="button">
      <span className={styles.top} />
      <span className={styles.bottom} />
    </button>
  );
}
