'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from '@/styles/ui/menu.module.scss';

import GitHubLink from './links/github';
import ResumeLink from './links/resume';
import Navigation from './navigation';
import Theme from './theme';

function Menu() {
  const router = useRouter();

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    router.beforePopState(({ as }) => {
      if (as !== router.asPath) {
        setIsActive(false);
      }

      return true;
    });

    return () => {
      router.beforePopState(() => true);
    };
  }, [router]);

  const handleOnClose = () => {
    setIsActive(false);

    document.getElementById('menuOpen').focus();
  };

  const handleOnOpen = () => {
    setIsActive(true);

    setTimeout(() => {
      document.getElementById('menuClose').focus();
    }, 750);
  };

  const handleOnLinkClick = () => {
    setIsActive(false);
  };

  return (
    <>
      <button
        aria-label="Open menu"
        className={styles.menuButton}
        id="menuOpen"
        onClick={handleOnOpen}
        title="Open Menu"
        type="button"
      >
        <div aria-hidden="true" className={styles.icon} />
      </button>
      <div className={styles.menu} data-active={isActive}>
        <div
          aria-labelledby="menuHeading"
          aria-modal="true"
          className={styles.content}
          role="dialog"
          tabIndex={-1}
        >
          <div className={styles.circle}>
            <div className={styles.wrapper}>
              <button
                aria-label="Close menu"
                className={styles.close}
                id="menuClose"
                onClick={handleOnClose}
                title="Close menu"
                type="button"
              >
                <div aria-hidden="true" className={styles.icon} />
              </button>
              <h2 id="menuHeading">Menu</h2>
              <Navigation
                linkClassName={styles.link}
                onClick={handleOnLinkClick}
              />
              <div className={styles.footer}>
                <ResumeLink />
                <GitHubLink />
                <Theme />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
