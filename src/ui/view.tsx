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

  const handleOnSearch = () => {
    setIsSearching(!isSearching);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <div className={styles.inner}>
              <div className={styles.logo}>
                <Link href="/">
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
                  <ul className={styles.links}>
                    <li className={styles.link}>
                      <Link href="/">Home</Link>
                    </li>
                    <li className={styles.link}>
                      <Link href="/about">About</Link>
                    </li>
                  </ul>
                </div>
              </nav>
              <Menu />
              <div className={styles.search}>
                <button onClick={handleOnSearch} type="button">
                  <SearchIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Search isSearching={isSearching} onClose={handleOnSearch} />
      <main className={`${styles.view} ${className}`.trim()} id="view-anchor">
        {children}
      </main>
      <Footer />
      <Scroll />
    </>
  );
}

export default View;
