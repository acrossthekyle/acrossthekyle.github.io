import { Asterisk } from 'lucide-react';
import Link from 'next/link';

import styles from './stylesheet';

export default function Header() {
  return (
    <Link href="/">
      <Asterisk className={styles.icon} />
    </Link>
  );
}
