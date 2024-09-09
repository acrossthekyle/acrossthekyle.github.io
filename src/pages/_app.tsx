'use client';

import 'styles/globals.scss';

import { useEffect, useState } from 'react';
import { type AppProps } from 'next/app';
import Head from 'next/head';
import router from 'next/router';

import { Theme } from '@/contexts/theme';
import { Zoom } from '@/contexts/zoom';
import styles from '@/styles/pages/_app.module.scss';

import Post from './posts/layout';

function App({ Component, pageProps }: AppProps) {
  const [isPageLoading, setIsPageLoading] = useState(false);

  useEffect(() => {
    const routeEventStart = () => {
      setIsPageLoading(true);
    };

    const routeEventEnd = () => {
      setTimeout(() => {
        setIsPageLoading(false);
      }, 800);
    };

    router.events.on('routeChangeStart', routeEventStart);
    router.events.on('routeChangeComplete', routeEventEnd);
    router.events.on('routeChangeError', routeEventEnd);

    console.log(
      'View the code at https://github.com/acrossthekyle/acrossthekyle.github.io',
    );

    return () => {
      router.events.off('routeChangeStart', routeEventStart);
      router.events.off('routeChangeComplete', routeEventEnd);
      router.events.off('routeChangeError', routeEventEnd);
    };
  }, []);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1, viewport-fit=cover"
        />
      </Head>
      <Theme>
        <Zoom>
          {Component.displayName === 'MDXContent' ? (
            <Post>
              <Component {...pageProps} />
            </Post>
          ) : (
            <Component {...pageProps} />
          )}
        </Zoom>
      </Theme>
      {isPageLoading && <div className={styles.loading} />}
    </>
  );
}

export default App;
