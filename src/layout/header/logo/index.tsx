import { CircleOff } from 'lucide-react';
import Link from 'next/link';

import styles from './stylesheet';

export default function Logo() {
  return (
    <Link aria-label="acrossthekyle.com home" className={styles.link} href="/">
      <CircleOff
        aria-hidden="true"
        className={styles.icon}
        focusable="false"
        role="presentation"
      />
    </Link>
  );
}
