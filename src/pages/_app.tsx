'use client';

import 'styles/globals.scss';

import { useEffect, useState } from 'react';
import { type AppProps } from 'next/app';
import Head from 'next/head';
import router from 'next/router';

import Components from '@/components';
import Contexts from '@/contexts';
import scss from '@/styles/pages/_app.module.scss';

function App({ Component, pageProps }: AppProps) {
  const [isPageLoading, setIsPageLoading] = useState(false);

  useEffect(() => {
    const routeEventStart = () => {
      document
        .querySelector('html')
        .setAttribute('data-cannot-overflow', 'true');

      setIsPageLoading(true);
    };

    const routeEventEnd = () => {
      setTimeout(() => {
        document
          .querySelector('html')
          .setAttribute('data-cannot-overflow', 'false');

        setIsPageLoading(false);
      }, 800);
    };

    router.events.on('routeChangeStart', routeEventStart);
    router.events.on('routeChangeComplete', routeEventEnd);
    router.events.on('routeChangeError', routeEventEnd);

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
      <Contexts.Theme>
        <Contexts.Zoom>
          <Component {...pageProps} />
        </Contexts.Zoom>
      </Contexts.Theme>
      {isPageLoading && (
        <div className={scss.loading}>
          <Components.Loading />
        </div>
      )}
    </>
  );
}

export default App;
