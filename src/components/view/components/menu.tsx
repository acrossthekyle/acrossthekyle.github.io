'use client';

import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

import Images from '@/images';
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive]);

  const handleOnOpen = useCallback(() => {
    setIsActive(true);

    setTimeout(() => {
      document.getElementById('menuClose').focus();
    }, 750);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive]);

  const handleOnLinkClick = useCallback(() => {
    setIsActive(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive]);

  return (
    <>
      <button
        className={scss.open}
        id="menuOpen"
        onClick={handleOnOpen}
        title="Open Menu"
        type="button"
      >
        <Images.Icons.Menu />
      </button>
      <nav className={scss.container} data-active={isActive}>
        <div className={scss.wrapper}>
          <button
            className={scss.close}
            id="menuClose"
            onClick={handleOnClose}
            title="Close menu"
            type="button"
          >
            <Images.Icons.Close />
          </button>
          <div className={scss.content}>
            <div className={scss.item}>
              <h2>Menu</h2>
              <Navigation onClick={handleOnLinkClick} />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Menu;
