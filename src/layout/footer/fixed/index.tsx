import Link from 'next/link';

import Jump from './jump';
import Navigation from './navigation';
import styles from './stylesheet';

export default function Fixed() {
  return (
    <div className={styles.container}>
      <Link
        aria-label="acrossthekyle.com"
        className={styles.anchor}
        href="/"
      >
        KYL
      </Link>
      <Navigation />
      <Jump />
    </div>
  );
}
