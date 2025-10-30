import { CircleOff } from 'lucide-react';
import Link from 'next/link';

import styles from './stylesheet';

export default function Logo() {
  return (
    <Link href="/">
      <CircleOff className={styles.icon} />
    </Link>
  );
}
