import Link from 'next/link';

import styles from './stylesheet';

export default function Footer() {
  return (
    <footer className={styles.container}>
      <nav aria-label="supplementary navigation">
        <ul className={styles.links}>
          <li>
            <Link
              aria-label="send email"
              className="font-mono text-tiny"
              href="mailto:hello@acrossthekyle.com"
            >
              Email
            </Link>
          </li>
          <li>
            <Link
              aria-label="view instagram profile"
              className="font-mono text-tiny"
              href="https://instagram.com/acrossthekyle"
              target="_blank"
              rel="noreferrer"
            >
              Insta
            </Link>
          </li>
          <li>
            <Link
              aria-label="view linkedin profile"
              className="font-mono text-tiny"
              href="https://linkedin.com/in/acrossthekyle"
              target="_blank"
              rel="noreferrer"
            >
              In
            </Link>
          </li>
        </ul>
      </nav>
      <p className={styles.copyright}>
         © 2011 &mdash; {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
}
