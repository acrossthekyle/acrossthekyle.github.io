'use client';

import { useRouter } from 'next/navigation';

import styles from './stylesheet';

export default function Back() {
  const router = useRouter();

  const handleOnBack = () => {
    router.back();
  };

  return (
    <button className={styles.container} onClick={handleOnBack} type="button">
      <span className={styles.top} />
      <span className={styles.bottom} />
    </button>
  );
}
