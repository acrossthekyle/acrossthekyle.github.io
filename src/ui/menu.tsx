'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from '@/styles/ui/menu.module.scss';

import Theme from './theme';

function Menu() {
  const router = useRouter();

  const [isActive, toggleIsActive] = useState(false);

  useEffect(() => {
    router.beforePopState(({ as }) => {
      if (as !== router.asPath) {
        toggleIsActive(false);
      }

      return true;
    });

    return () => {
      router.beforePopState(() => true);
    };
  }, [router]);

  const handleOnToggle = () => {
    toggleIsActive(!isActive);
  };

  return (
    <div className={styles.menu} data-active={isActive}>
      <button
        aria-label="toggle menu"
        className={styles.toggle}
        onClick={handleOnToggle}
        title={isActive ? 'Close Menu' : 'Open Menu'}
        type="button"
      >
        <div aria-hidden="true" className={styles.icon} />
      </button>
      <div className={styles.content}>
        <div className={styles.circle}>
          <div className={styles.wrapper}>
            <h2>Menu</h2>
            <ul>
              <li>
                <Link className={styles.link} href="/" onClick={handleOnToggle}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={styles.link}
                  href="/about"
                  onClick={handleOnToggle}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className={styles.link}
                  href="https://acrossthekyle.etsy.com"
                  onClick={handleOnToggle}
                  target="_blank"
                >
                  Shop
                </Link>
              </li>
            </ul>
            <div className={styles.footer}>
              <Theme />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
