'use client';

import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import data from '@/cache/config';
import { useMenu } from '@/hooks/useMenu';

import styles from './stylesheet';
import Theme from './theme';

export default function Content() {
  const { isActive, onClose } = useMenu();

  const path = usePathname();

  return (
    <div className={styles.container(isActive)}>
      <Theme />
      <h2 className={styles.header} id="dialog-header">
        Menu
      </h2>
      <nav>
        <ul className={styles.menu}>
          <li className={styles.item}>
            <Link
              className={styles.link}
              href="/"
              onClick={onClose}
            >
              <span className={styles.index}>
                01
              </span>
              <span className={styles.text(path === '/')}>
                Index
              </span>
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              className={styles.link}
              href="/index"
              onClick={onClose}
            >
              <span className={styles.index}>
                02
              </span>
              <span className={styles.text(path.includes('/index'))}>
                Wanderings
              </span>
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              className={styles.link}
              href="mailto:hello@acrossthekyle.com"
              target="_blank"
            >
              <span className={styles.index}>
                03
              </span>
              <span className={styles.text(false)}>
                Email <ArrowUpRight aria-hidden="true" className={styles.arrow} />
              </span>
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              className={styles.link}
              href="https://instagram.com/acrossthekyle"
              target="_blank"
            >
              <span className={styles.index}>
                04
              </span>
              <span className={styles.text(false)}>
                Instagram <ArrowUpRight aria-hidden="true" className={styles.arrow} />
              </span>
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              className={styles.link}
              href="https://linkedin.com/in/acrossthekyle"
              target="_blank"
            >
              <span className={styles.index}>
                05
              </span>
              <span className={styles.text(false)}>
                LinkedIn <ArrowUpRight aria-hidden="true" className={styles.arrow} />
              </span>
            </Link>
          </li>
        </ul>
      </nav>
      <section
        aria-label="other information"
        className={styles.other}
      >
        <div className={styles.cell}>
          <h3 className={styles.heading}>Location</h3>
          <span className={styles.line}>41.8781° N, 87.6298° W</span>
          <span className={styles.line}>Sol, Orion Spur, Milky Way</span>
        </div>
        <div className={styles.cell}>
          <h3 className={styles.heading}>Status</h3>
          <span className={styles.line}>Last compiled on</span>
          <span className={styles.line}>{data.lastUpdated}</span>
        </div>
        <div className={styles.cell}>
          <h3 className={styles.heading}>Tech Stack</h3>
          <span className={styles.line}>HTML / CSS / JavaScript / JSON</span>
          <span className={styles.line}>Vercel / NextJs / TailwindCSS</span>
        </div>
      </section>
    </div>
  );
}
