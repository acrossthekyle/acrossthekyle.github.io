'use client';

import Link from 'next/link';

import { useModel } from './model';
import styles from './stylesheet';

export default function Header() {
  const { isOnRoot, uri } = useModel();

  return (
    <Link className={styles.close(isOnRoot)} href={uri}>
      BACK
    </Link>
  );
}
