'use client';

import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { useEvent } from '@/hooks/useEvent';

import styles from './stylesheet';

type Props = {
  slug?: string;
};

export default function Toggle({ slug }: Props) {
  const router = useRouter();

  const handleOnClose = () => {
    if (slug) {
      router.push(`/experiences/${slug}`);
    } else {
      router.back();
    }
  };

  useEvent('onEscape', () => {
    handleOnClose();
  });

  return (
    <div className={styles.toggle}>
      <button className={styles.close} onClick={handleOnClose} type="button">
        <X className={styles.x} />
      </button>
    </div>
  );
}
