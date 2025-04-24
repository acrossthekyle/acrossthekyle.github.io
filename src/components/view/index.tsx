'use client';

import Head from 'next/head';
import Link from 'next/link';
import { ReactNode, useState } from 'react';

import Images from '@/images';
import Styles from '@/styles';

import Components from './components';

const scss = Styles.Components.View.View;

type Metadata = {
  description: string;
  title: string;
  url: string;
};

type Props = {
  children: ReactNode | ReactNode[];
  className?: string;
  element?: string;
  metadata?: Metadata;
};

function Wrapper({ children, element, ...rest }) {
  if (element === 'div') {
    return <div {...rest}>{children}</div>;
  }

  return <main {...rest}>{children}</main>;
}

function View({ children, className = '', element, metadata }: Props) {
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
        {!metadata?.title && <title>Across The Kyle</title>}
        {metadata?.title && (
          <>
            <title>Across The Kyle - {metadata.title}</title>
            <meta
              property="og:title"
              key="og:title"
              content={`Across The Kyle - ${metadata.title}`}
            />
          </>
        )}
        {metadata?.description && (
          <>
            <meta
              name="description"
              key="description"
              content={metadata.description}
            />
            <meta
              property="og:description"
              key="og:description"
              content={metadata.description}
            />
          </>
        )}
        {metadata?.url && (
          <meta
            property="og:url"
            key="og:url"
            content={`https://www.acrossthekyle.com${metadata.url}`}
          />
        )}
      </Head>
      <header className={scss.header}>
        <div className={scss.wrapper}>
          <div className={scss.container}>
            <div className={scss.inner}>
              <Link className={scss.logo} href="/" id="logo">
                AcrossThe<span>Kyle</span>
              </Link>
              <nav className={scss.nav}>
                <div className={scss.wrapper}>
                  <Components.Navigation
                    containerClassName={scss.links}
                    linkClassName={scss.link}
                  />
                </div>
              </nav>
              <div className={scss.icons}>
                <button
                  id="searchOpen"
                  onClick={handleOnOpenSearch}
                  title="Search for posts"
                  type="button"
                >
                  <Images.Icons.Search />
                </button>
                <Components.Cart />
                <Components.Theme />
                <Components.Menu />
              </div>
            </div>
          </div>
        </div>
      </header>
      <Components.Search
        isSearching={isSearching}
        onClose={handleOnCloseSearch}
      />
      <Wrapper
        className={`${scss.view} ${className}`.trim()}
        element={element}
        id="view-anchor"
      >
        {children}
      </Wrapper>
      <Components.Footer />
      <Components.Scroll />
    </>
  );
}

export default View;
