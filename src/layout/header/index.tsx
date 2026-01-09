import { Home, Instagram, Linkedin, Mail, FileTypeCorner } from 'lucide-react';
import Link from 'next/link';

import styles from './stylesheet';
import Theme from './theme';

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export default function Header({ children }: Props) {
  return (
    <header className={styles.container}>
      <nav aria-label="social media navigation" className={styles.socials}>
        <ul className={styles.list}>
          <li>
            <Link
              aria-label="acrossthekyle.com home"
              href="/"
            >
              <Home className={styles.icon} />
            </Link>
          </li>
          <li>
            <Link
              aria-label="view instagram profile"
              href="https://instagram.com/acrossthekyle"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram className={styles.icon} />
            </Link>
          </li>
          <li>
            <Link
              aria-label="view linkedin profile"
              href="https://linkedin.com/in/acrossthekyle"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className={styles.icon} />
            </Link>
          </li>
          <li>
            <Link
              aria-label="send email"
              href="mailto:hello@acrossthekyle.com"
            >
              <Mail className={styles.icon} />
            </Link>
          </li>
          <li>
            <Link
              aria-label="view resume"
              href="/acrossthekyle-resume.pdf"
              target="_blank"
            >
              <FileTypeCorner className={styles.icon} />
            </Link>
          </li>
          <li>
            <Theme />
          </li>
        </ul>
      </nav>
      <div className={styles.scrollable} />
      {children}
    </header>
  );
}
