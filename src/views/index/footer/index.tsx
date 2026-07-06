import Link from 'next/link';

import { styles } from './stylesheet';

export default function Footer() {
  return (
    <footer className={styles.container}>
      <ul className={styles.links}>
        <li>
          <Link
            className={styles.link}
            href="mailto:hello@acrossthekyle.com"
          >
            E-mail
          </Link>
        </li>
        <li>
          <Link
            className={styles.link}
            href="https://instagram.com/acrossthekyle?ref=acrossthekyle.com"
            target="_blank"
          >
            IG
          </Link>
        </li>
        <li>
          <Link
            className={styles.link}
            href="https://linkedin.com/in/acrossthekyle?ref=acrossthekyle.com"
            target="_blank"
          >
            Li
          </Link>
        </li>
      </ul>
    </footer>
  );
}
