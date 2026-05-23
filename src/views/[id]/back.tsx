'use client';

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

import styles from './stylesheet';

export default function Back() {
  const router = useRouter();

  return (
    <button className={styles.back} onClick={router.back} type="button">
      <ArrowLeft className={styles.icon} /> Collections
    </button>
  );
}
