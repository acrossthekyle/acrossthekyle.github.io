import Link from 'next/link';

import { styles } from './stylesheet';

export default function Header() {
  return (
    <header>
      <Link aria-label="acrossthekyle.com" className={styles.anchor} href="/">
        <span>K</span>
        <span>/</span>
        <span>G</span>
      </Link>
      <Link className={styles.socials} href="mailto:hello@acrossthekyle.com">
        Say Hello
      </Link>
    </header>
  );
}
