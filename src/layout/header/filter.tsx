'use client';

import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { useView } from '@/hooks/useView';

import styles from './stylesheet';

type Props = {
  label: string;
};

export default function Filter({ label }: Props) {
  const router = useRouter();

  const { current } = useView();

  const handleOnReset = () => {
    router.push('/');
  };

  return (
    <section
      aria-label="reset filter controls"
      className={styles.filter(current === 'library')}
    >
      <button
        className={`${styles.button(true)} ${styles.only}`}
        onClick={handleOnReset}
        type="button"
      >
        {/*<X className={styles.icon} />*/}
        {label}
      </button>
    </section>
  );
}
