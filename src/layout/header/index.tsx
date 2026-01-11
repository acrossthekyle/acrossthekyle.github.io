import Link from 'next/link';

import styles from './stylesheet';
import Theme from './theme';

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export default function Header({ children }: Props) {
  return (
    <header className={styles.container}>
      <nav aria-label="main navigation" className={styles.navigation}>
        <ul className={styles.list}>
          <li>
            <Link
              aria-label="acrossthekyle.com home"
              className={styles.link}
              data-emphasis="true"
              href="/"
            >
              Home
            </Link>
          </li>
          <li className={styles.divide}>
            <Link
              aria-label="view cv/resume"
              className={styles.link}
              href="/cv"
            >
              CV
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
              Insta
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
              In
            </Link>
          </li>
          <li>
            <Link
              aria-label="send email"
              className={styles.link}
              href="mailto:hello@acrossthekyle.com"
            >
              E-mail
            </Link>
          </li>
        </ul>
      </nav>
      <Theme />
      <div className={styles.scrollable} />
      {children}
    </header>
  );
}
