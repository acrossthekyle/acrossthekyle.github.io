import Link from 'next/link';

import Navigation from './navigation';
import styles from './stylesheet';

export default function Header() {
  return (
    <header className={styles.container}>
      <Link
        aria-label="acrossthekyle.com"
        className={styles.anchor}
        href="/"
      >
        KYL
      </Link>
      <Navigation />
    </header>
  );
}
