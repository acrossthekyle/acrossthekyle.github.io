import Link from 'next/link';

import styles from './stylesheet';

export default function Footer() {
  return (
    <footer className={styles.container}>
      <nav aria-label="supplementary navigation" className={styles.nav}>
        <ul className={styles.links}>
          <li>
            <Link
              aria-label="view instagram profile"
              href="https://instagram.com/acrossthekyle"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </Link>
          </li>
          <li>
            <Link
              aria-label="view linkedin profile"
              href="https://linkedin.com/in/acrossthekyle"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </Link>
          </li>
        </ul>
      </nav>
      <p className={styles.copyright}>
         © 2011 - {new Date().getFullYear()}. All rights reserved.
      </p>
    </footer>
  );
}
