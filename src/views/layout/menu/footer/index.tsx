import Link from 'next/link';

import styles from './stylesheet';

export default function Footer() {
  return (
    <footer className={styles.links}>
      <Link
        className={styles.link}
        href="https://instagram.com/acrossthekyle"
        target="_blank"
        rel="noreferrer"
      >
        Instagram
      </Link>
      <Link
        className={styles.link}
        href="https://apps.garmin.com/en-US/developer/f796f8e5-5034-44c2-99a7-21d319c6c728/apps"
        target="_blank"
        rel="noreferrer"
      >
        Garmin
      </Link>
      <Link
        className={styles.link}
        href="https://github.com/acrossthekyle/acrossthekyle.github.io"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </Link>
      <Link
        className={styles.link}
        href="/kyle-gilbert-resume.pdf"
        target="_blank"
        rel="noreferrer"
      >
        Resume
      </Link>
    </footer>
  );
}