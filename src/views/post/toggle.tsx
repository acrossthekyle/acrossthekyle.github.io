'use client';

import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';

import styles from './stylesheet';

type Props = {
  slug: string;
};

export default function Toggle({ slug }: Props) {
  const router = useRouter();

  const handleOnClose = () => {
    router.push(`/experiences/${slug}`);
  };

  return (
    <button className={styles.close} onClick={handleOnClose} type="button">
      <X className={styles.x} />
    </button>
  );
}
