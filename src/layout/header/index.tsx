'use client';

import { Glasses, X } from 'lucide-react';
import Link from 'next/link';

import { useModel } from './model';
import styles from './stylesheet';

export default function Header() {
  const { handleOnToggle, isExpanded } = useModel();

  return (
    <header className={styles.container(isExpanded)}>
      <Link
        aria-label="acrossthekyle.com home"
        className={styles.anchor}
        href="/"
      >
        <Glasses aria-hidden="true" className={styles.icon} />
      </Link>
      <button
        aria-label="toggle about me information"
        className={styles.toggle}
        onClick={handleOnToggle}
        type="button"
      >
        <X aria-hidden="true" className={styles.x(isExpanded)} />
      </button>
      <hgroup className={styles.group(isExpanded)}>
        <h1 className={styles.tagline}>
          A backpacker and UI developer always seeking new ways to move forward.
        </h1>
        <p className={styles.about}>
          Hey, I'm Kyle; a backpacker and code tinkerer who lives on the lands belonging to the <span className={styles.emphasis}>Potawatomi</span>, <span className={styles.emphasis}>Ojibwe</span>, and <span className={styles.emphasis}>Odawa</span> &mdash; otherwise known as the city of <span className={styles.emphasis}>Chicago</span>. I've spent the past {new Date().getFullYear() - 2012} years building parts of the web that you probably use today, and the last {new Date().getFullYear() - 2018} years exploring the world. This website is a collection of those experiences.
        </p>
      </hgroup>
      <nav
        aria-label="supplementary navigation"
        className={styles.footer(isExpanded)}
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
    </header>
  );
}
