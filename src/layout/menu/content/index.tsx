'use client';

import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import data from '@/cache/config';
import { useMenu } from '@/hooks/useMenu';

import Local from './local';
import { styles } from './stylesheet';
import Theme from './theme';

export default function Content() {
  const { isActive, onClose } = useMenu();

  const path = usePathname();

  const handleOnClose = () => {
    setTimeout(() => {
      onClose();
    }, 100);
  };

  return (
    <div className={styles.container(isActive)}>
      <Theme />
      <Local />
      <h2 className={styles.header} id="dialog-header">
        Menu
      </h2>
      <nav aria-label="main navigation">
        <ul className={styles.menu}>
          <li className={styles.item(isActive, 0)}>
            <Link
              className={styles.link(path === '/')}
              href="/"
              onClick={handleOnClose}
            >
              <span className={styles.index}>
                01
              </span>
              <span className={styles.text}>
                Index
              </span>
            </Link>
          </li>
          <li className={styles.item(isActive, 1)}>
            <Link
              className={styles.link(path.includes('/wanderings'))}
              href="/wanderings"
              onClick={handleOnClose}
            >
              <span className={styles.index}>
                02
              </span>
              <span className={styles.text}>
                Wanderings
              </span>
            </Link>
          </li>
          <li className={styles.item(isActive, 2)}>
            <Link
              className={styles.link(false)}
              href="mailto:hello@acrossthekyle.com"
              target="_blank"
            >
              <span className={styles.index}>
                03
              </span>
              <span className={styles.text}>
                Contact
              </span>
            </Link>
          </li>
          <li className={styles.item(isActive, 3)}>
            <Link
              className={styles.link(false)}
              href="https://instagram.com/acrossthekyle"
              target="_blank"
            >
              <span className={styles.index}>
                04
              </span>
              <span className={styles.text}>
                Instagram <ArrowUpRight aria-hidden="true" className={styles.arrow} />
              </span>
            </Link>
          </li>
          <li className={styles.item(isActive, 4)}>
            <Link
              className={styles.link(false)}
              href="https://linkedin.com/in/acrossthekyle"
              target="_blank"
            >
              <span className={styles.index}>
                05
              </span>
              <span className={styles.text}>
                Resume <ArrowUpRight aria-hidden="true" className={styles.arrow} />
              </span>
            </Link>
          </li>
        </ul>
      </nav>
      <section aria-label="extra information" className={styles.footer}>
        <div className={styles.cell}>
          <span className={styles.line}>
            © 2016 &mdash; {new Date().getFullYear()}
          </span>
        </div>
        <div className={styles.cell}>
          <span className={styles.line}>
            Last built: {data.lastUpdated}
          </span>
        </div>
      </section>
    </div>
  );
}
