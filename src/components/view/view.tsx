'use client';

import Head from 'next/head';
import Link from 'next/link';
import { ReactNode, useContext, useEffect, useState } from 'react';

import Contexts from '@/contexts';
import Images from '@/images';
import styles from '@/styles/components/view/view.module.scss';

import ViewComponents from './components';

type Props = {
  children: ReactNode | ReactNode[];
  className?: string;
  element?: string;
  title?: string;
};

let previousScrollPosition = 0;

function Wrapper({ children, element, ...rest }) {
  if (element === 'div') {
    return <div {...rest}>{children}</div>;
  }

  return <main {...rest}>{children}</main>;
}

function View({ children, className = '', element, title }: Props) {
  const { theme } = useContext(Contexts.ThemeContext);

  const [isSearching, setIsSearching] = useState(false);

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
      <Head>
        <title>Kyle &mdash;&mdash; {title}</title>
      </Head>
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <div className={styles.inner}>
              <div className={styles.logo}>
                <Link aria-label="acrossthekyle" href="/" id="logo">
                  AcrossThe<span>Kyle</span>
                </Link>
              </div>
              <nav className={styles.nav}>
                <div className={styles.wrapper}>
                  <ViewComponents.Navigation
                    containerClassName={styles.links}
                    linkClassName={styles.link}
                  />
                </div>
              </nav>
              <div className={styles.icons}>
                <button
                  aria-label="Search for posts"
                  id="searchOpen"
                  onClick={handleOnOpenSearch}
                  type="button"
                >
                  <Images.Icons.Search />
                </button>
                <ViewComponents.Cart />
              </div>
              <ViewComponents.Menu />
            </div>
          </div>
        </div>
      </header>
      <ViewComponents.Search
        isSearching={isSearching}
        onClose={handleOnCloseSearch}
      />
      <Wrapper
        className={`${styles.view} ${className}`.trim()}
        element={element}
        id="view-anchor"
      >
        {children}
      </Wrapper>
      <ViewComponents.Footer />
      <ViewComponents.Scroll />
    </>
  );
}

export default View;
