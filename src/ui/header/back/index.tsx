'use client';

import { ArrowUpLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

import styles from './stylesheet';

type Props = {
  path?: string;
};

export default function Back({ children, path }: React.PropsWithChildren<Props>) {
  const router = useRouter();

  const handleOnClick = () => {
    if (!!path) {
      router.push(path);
    } else {
      router.back();
    }
  };

  return (
    <button
      className={styles.container}
      onClick={handleOnClick}
      type="button"
    >
      <ArrowUpLeft className={styles.icon} /> {children}
    </button>
  );
}
