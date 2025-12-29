'use client';

import { Glasses } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { useHierarchy } from '@/hooks/useHierarchy';

import styles from './stylesheet';

export default function Header() {
  const { isOnRoot } = useHierarchy();

  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (isExpanded) {
      document.documentElement.classList.add('overflow-hidden');
    } else {
      document.documentElement.classList.remove('overflow-hidden');
    }
  }, [isExpanded]);

  const handleOnToggle = () => {
    setIsExpanded(previous => !previous);
  };

  return (
    <header className={styles.container(isOnRoot, isExpanded)}>
      <Link aria-label="acrossthekyle.com home" className={styles.anchor} href="/">
        <Glasses aria-hidden="true" className={styles.logo} />
      </Link>
      <div>
        {!isOnRoot && (
          <button
            className={styles.toggle}
            onClick={handleOnToggle}
            type="button"
          >
            About
          </button>
        )}
        <hgroup className={styles.group(isOnRoot, isExpanded)}>
          <h1 className={styles.tagline}>
            A backpacker and UI developer always seeking new ways to move forward intentfully.
          </h1>
          <p className={styles.about}>
            Hey, I'm Kyle; a code tinkerer and backpacker who has spent the last {new Date().getFullYear() - 2012} years building parts of the web that you probably use today (with zero awards or recognitions), and the last {new Date().getFullYear() - 2018} years traveling and hiking around the world. I live on the lands belonging to the <span className={styles.emphasis}>Potawatomi</span>, <span className={styles.emphasis}>Ojibwe</span>, and <span className={styles.emphasis}>Odawa</span> &mdash; otherwise known as the city of <span className={styles.emphasis}>Chicago</span> &mdash; and I call hiking long-distance trails a vacation.
          </p>
        </hgroup>
        <nav
          aria-label="supplementary navigation"
          className={styles.footer(isOnRoot, isExpanded)}
        >
          <ul className={styles.list}>
            <li>
              <a
                aria-label="view resume"
                className={styles.link}
                href="/acrossthekyle-resume.pdf"
                target="_blank"
              >
                Resume
              </a>
            </li>
            <li>
              <a
                aria-label="send email"
                className={styles.link}
                href="mailto:hello@acrossthekyle.com"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
