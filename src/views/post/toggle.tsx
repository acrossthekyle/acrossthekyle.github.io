'use client';

import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { useEvent } from '@/hooks/useEvent';

import styles from './stylesheet';

type Props = {
  slug: string;
};

export default function Toggle({ slug }: Props) {
  const router = useRouter();

  useEffect(() => {
    document.documentElement.classList.add('overflow-hidden');
  }, []);

  useEvent('onEscape', () => {
    handleOnClose();
  });

  const handleOnClose = () => {
    document.documentElement.classList.remove('overflow-hidden');

    router.push(`/experiences/${slug}`);
  };

  return (
    <button className={styles.close} onClick={handleOnClose} type="button">
      <X className={styles.x} />
    </button>
  );
}
