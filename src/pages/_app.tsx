'use client';

import 'styles/globals.scss';

import { useEffect } from 'react';
import { type AppProps } from 'next/app';
import Head from 'next/head';

import { Theme } from '@/contexts/theme';
import { Zoom } from '@/contexts/zoom';
import styles from '@/styles/pages/_app.module.scss';

import Post from './posts/layout';

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    console.log(
      'View the code at https://github.com/acrossthekyle/acrossthekyle.github.io',
    );
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
    </>
  );
}

export default App;
