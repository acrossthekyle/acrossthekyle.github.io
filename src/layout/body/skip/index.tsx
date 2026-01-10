import Link from 'next/link';

import styles from './stylesheet';

export default function Skip() {
  return (
    <Link
      className={styles.link}
      href="#skip-to"
    >
      Skip to Main Content
    </Link>
  );
}
