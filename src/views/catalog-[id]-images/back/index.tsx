'use client';

import { MoveLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect } from 'react';

import { styles } from './stylesheet';

type Props = {
  title: string;
};

export default function Back({ title }: Props) {
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
      <MoveLeft className={styles.arrow} /> {title}
    </button>
  );
}
