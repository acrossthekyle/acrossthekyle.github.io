'use client';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

import Styles from '@/styles';

import Navigation from './navigation';

const scss = Styles.Components.View.Components.Menu;

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  const handleOnClose = useCallback(() => {
    setIsActive(false);

    document.getElementById('menuOpen').focus();

    document
      .querySelector('html')
      .setAttribute('data-cannot-overflow', 'false');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive]);

  const handleOnOpen = useCallback(() => {
    setIsActive(true);

    document.querySelector('html').setAttribute('data-cannot-overflow', 'true');

    setTimeout(() => {
      document.getElementById('menuClose').focus();
    }, 750);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive]);

  const handleOnLinkClick = useCallback(() => {
    setIsActive(false);

    document
      .querySelector('html')
      .setAttribute('data-cannot-overflow', 'false');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive]);

  return (
    <>
      <button
        aria-label="Open menu"
        className={scss.menuButton}
        id="menuOpen"
        onClick={handleOnOpen}
        title="Open Menu"
        type="button"
      >
        <div aria-hidden="true" className={scss.icon} />
      </button>
      <div className={scss.menu} data-active={isActive}>
        <div
          aria-labelledby="menuHeading"
          aria-modal="true"
          className={scss.content}
          role="dialog"
          tabIndex={-1}
        >
          <div className={scss.circle}>
            <div className={scss.wrapper}>
              <button
                aria-label="Close menu"
                className={scss.close}
                id="menuClose"
                onClick={handleOnClose}
                title="Close menu"
                type="button"
              >
                <div aria-hidden="true" className={scss.icon} />
              </button>
              <h2 id="menuHeading">Menu</h2>
              <Navigation
                linkClassName={scss.link}
                onClick={handleOnLinkClick}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
