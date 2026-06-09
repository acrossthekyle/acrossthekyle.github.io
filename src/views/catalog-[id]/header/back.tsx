'use client';

import { ArrowUpLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

import styles from './stylesheet';

export default function Back() {
  const router = useRouter();

  const handleOnBack = () => {
    router.back();
  };

  return (
    <button className={styles.back} onClick={handleOnBack} type="button">
      <ArrowUpLeft className={styles.arrow} /> Browse
    </button>
  );
}
