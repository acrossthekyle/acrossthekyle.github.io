import Link from 'next/link';

import styles from './stylesheet';

export default function View() {
  return (
    <ul className={styles.container}>
      <li className={styles.item} style={{ animationDelay: '0.1s' }}>
        <a className={styles.link} href="mailto:hello@acrossthekyle.com">
          Email
        </a>
      </li>
      <li className={styles.item} style={{ animationDelay: '0.125s' }}>
        <Link
          className={styles.link}
          href="/kyle-gilbert-resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </Link>
      </li>
      <li className={styles.item} style={{ animationDelay: '0.15s' }}>
        <Link
          className={styles.link}
          href="https://linkedin.com/in/acrossthekyle"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </Link>
      </li>
      <li className={styles.item} style={{ animationDelay: '0.2s' }}>
        <Link
          className={styles.link}
          href="https://instagram.com/acrossthekyle"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </Link>
      </li>
      <li className={styles.item} style={{ animationDelay: '0.175s' }}>
        <Link
          className={styles.link}
          href="https://github.com/acrossthekyle/acrossthekyle.github.io"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </Link>
      </li>
      <li className={styles.item} style={{ animationDelay: '0.225s' }}>
        <Link
          className={styles.link}
          href="https://apps.garmin.com/en-US/developer/f796f8e5-5034-44c2-99a7-21d319c6c728/apps"
          target="_blank"
          rel="noreferrer"
        >
          Garmin
        </Link>
      </li>
    </ul>
  );
}
