'use client';

import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { useEvent } from '@/hooks/useEvent';

import styles from './stylesheet';

type Props = {
  slug: string;
};

export default function Toggle({ slug }: Props) {
  const router = useRouter();

  const handleOnClose = () => {
    router.push(`/experiences/${slug}`);
  };

  useEvent('onEscape', () => {
    handleOnClose();
  });

  return (
    <button className={styles.close} onClick={handleOnClose} type="button">
      <X className={styles.x} />
    </button>
  );
}
