import Link from 'next/link';

import Menu from './menu';
import styles from './stylesheet';
import Theme from './theme';

export default function Header() {
  return (
    <header>
      <Link
        aria-label="acrossthekyle.com home"
        className={styles.anchor}
        href="/"
      >
        K.
      </Link>
      <Menu />
      <Theme className={styles.theme} />
    </header>
  );
}
