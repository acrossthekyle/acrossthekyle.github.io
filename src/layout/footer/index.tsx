'use client';

import Link from 'next/link';

import { useModel } from './model';
import styles from './stylesheet';

export default function Footer() {
  const { handleOnSwitchTheme, theme } = useModel();

  return (
    <footer className={styles.container}>
      <button
        className={styles.theme}
        onClick={handleOnSwitchTheme}
        type="button"
      >
        Switch to {theme === 'dark' ? 'light' : 'dark'} Mode
      </button>
      <nav
        aria-label="supplementary navigation"
        className={styles.links}
      >
        <ul className={styles.list}>
          <li>
            <Link
              aria-label="view resume"
              className={styles.link}
              href="/acrossthekyle-resume.pdf"
              target="_blank"
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              aria-label="send email"
              className={styles.link}
              href="mailto:hello@acrossthekyle.com"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              aria-label="view linkedin profile"
              className={styles.link}
              href="https://linkedin.com/in/acrossthekyle"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </Link>
          </li>
          <li>
            <Link
              aria-label="view instagram profile"
              className={styles.link}
              href="https://instagram.com/acrossthekyle"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </Link>
          </li>
        </ul>
      </nav>
      <p>
        1987 - {new Date().getFullYear()} © <Link href="/">Kyle</Link>. All Right Reserved. Published with <a href="https://vercel.com" target="_blank" rel="noreferrer">Vercel</a>. See you out there.
      </p>
    </footer>
  );
}
