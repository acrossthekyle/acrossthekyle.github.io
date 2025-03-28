'use client';

import { ReactNode, useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { ThemeContext } from '@/contexts/theme';
import styles from '@/styles/ui/view.module.scss';

import Footer from './footer';
import CloseIcon from './icons/close';
import SearchIcon from './icons/search';
import Menu from './menu';
import Navigation from './navigation';
import Scroll from './scroll';
import Search from './search';

type Props = {
  children: ReactNode | ReactNode[];
  className?: string;
};

let previousScrollPosition = 0;

function View({ children, className = '' }: Props) {
  const { theme } = useContext(ThemeContext);

  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      previousScrollPosition = window.pageYOffset;
    }

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleScroll = () => {
    const header = document.querySelector('header');

    if (header !== null) {
      const headerBottom = header.offsetTop + header.offsetHeight;

      const currentScrollPosition = window.pageYOffset;

      if (
        previousScrollPosition > currentScrollPosition ||
        currentScrollPosition < headerBottom
      ) {
        header.style.top = '0';
      } else {
        header.style.top = '-4.5rem';
      }

      previousScrollPosition = currentScrollPosition;
    }
  };

  const handleOnOpenSearch = () => {
    setIsSearching(true);

    setTimeout(() => {
      document.getElementById('search-input').focus();
    }, 250);
  };

  const handleOnCloseSearch = () => {
    setTimeout(() => {
      document.getElementById('searchOpen').focus();
    }, 250);

    setIsSearching(false);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <div className={styles.inner}>
              <div className={styles.logo}>
                <Link aria-label="acrossthekyle" href="/" id="logo">
                  <Image
                    alt="acrossthekyle.com logo"
                    height={60}
                    quality={20}
                    src={`https://ik.imagekit.io/acrossthekyle/uploads/logo-${theme}.png?updatedAt=1725897720418&tr=q-20`}
                    title="Kyle Gilbert"
                    width={60}
                  />
                </Link>
              </div>
              <nav className={styles.nav}>
                <div className={styles.wrapper}>
                  <Navigation
                    containerClassName={styles.links}
                    linkClassName={styles.link}
                  />
                </div>
              </nav>
              <div className={styles.search}>
                <button
                  aria-label="Search for posts"
                  id="searchOpen"
                  onClick={handleOnOpenSearch}
                  type="button"
                >
                  <SearchIcon />
                </button>
              </div>
              <Menu />
            </div>
          </div>
        </div>
      </header>
      <Search isSearching={isSearching} onClose={handleOnCloseSearch} />
      <main className={`${styles.view} ${className}`.trim()} id="view-anchor">
        {children}
      </main>
      <Footer />
      <Scroll />
    </>
  );
}

export default View;
