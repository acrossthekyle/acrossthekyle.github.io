'use client';

import { usePathname, useRouter } from 'next/navigation';

import styles from './stylesheet';

export default function Anchor() {
  const path = usePathname();
  const router = useRouter();

  const handleOnClick = () => {
    if (path !== '/about') {
      router.push('/about');
    } else {
      router.back();
    }
  };

  return (
    <button className={styles.anchor} onClick={handleOnClick} type="button">
      <span className={styles.top(path === '/about')} />
      <span className={styles.bottom(path === '/about')} />
    </button>
  );
}
