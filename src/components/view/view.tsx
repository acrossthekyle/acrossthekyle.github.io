import Head from 'next/head';
import Link from 'next/link';
import { ReactNode } from 'react';

import Images from '@/images';
import Styles from '@/styles';

import Components from './components';
import { useViewModel } from './view.viewModel';

const scss = Styles.Components.View.View;

type Props = {
  children: ReactNode | ReactNode[];
  className?: string;
  element?: string;
  title?: string;
};

function Wrapper({ children, element, ...rest }) {
  if (element === 'div') {
    return <div {...rest}>{children}</div>;
  }

  return <main {...rest}>{children}</main>;
}

function View({ children, className = '', element, title }: Props) {
  const { handleOnCloseSearch, handleOnOpenSearch, isSearching } =
    useViewModel();

  return (
    <>
      <Head>
        <title>Kyle &mdash;&mdash; {title}</title>
      </Head>
      <header className={scss.header}>
        <div className={scss.wrapper}>
          <div className={scss.container}>
            <div className={scss.inner}>
              <div className={scss.logo}>
                <Link aria-label="acrossthekyle" href="/" id="logo">
                  AcrossThe<span>Kyle</span>
                </Link>
              </div>
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
                  aria-label="Search for posts"
                  id="searchOpen"
                  onClick={handleOnOpenSearch}
                  type="button"
                >
                  <Images.Icons.Search />
                </button>
                <Components.Cart />
              </div>
              <Components.Menu />
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
