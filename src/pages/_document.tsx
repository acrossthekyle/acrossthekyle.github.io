import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
  render() {
    return (
      <Html data-theme="light" lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="author" content="Kyle Gilbert" />
          <meta
            name="description"
            content="I'm a backpacker/programmer based in Chicago with my partner and our dog Dax."
          />
          <meta name="format-detection" content="telephone=no" />
          <meta name="format-detection" content="address=no" />
          <meta name="referrer" content="origin" />
          <meta name="robots" content="index, follow" />
          <meta name="color-scheme" content="light" />
          <meta name="application-name" content="@acrossthekyle" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-title" content="Kyle" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />

          <meta name="theme-color" content="#1d1d1d" />
          <meta name="msapplication-navbutton-color" content="#1d1d1d" />

          <meta property="og:title" content="Kyle - Backpacker/Programmer" />
          <meta
            property="og:description"
            content="I'm a backpacker/programmer based in Chicago with my partner and our dog Dax."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.acrossthekyle.com" />
          <meta property="og:locale" content="en" />
          <meta property="og:site_name" content="Kyle Gilbert" />
          <meta
            property="og:image"
            content="https://www.acrossthekyle.com/favicons/web-app-manifest-512x512.png"
          />

          <link rel="canonical" href="https://www.acrossthekyle.com" />

          <link
            rel="icon"
            type="image/png"
            href="/favicons/favicon-96x96.png?v=2"
            sizes="96x96"
          />
          <link
            rel="icon"
            type="image/svg+xml"
            href="/favicons/favicon.svg?v=2"
          />
          <link rel="shortcut icon" href="/favicons/favicon.ico?v=2" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicons/apple-touch-icon.png?v=2"
          />
          <link rel="manifest" href="/favicons/site.webmanifest?v=2" />
          <meta name="msapplication-TileColor" content="#1d1d1d" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          {/* eslint-disable-next-line @next/next/google-font-display */}
          <link
            href="https://fonts.googleapis.com/css2?family=Domine:wght@400..700&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap"
            rel="stylesheet"
          />
          <Script id="inline-theme-script">
            {`
              (function () {
                var currentTheme = 'light';

                if (localStorage.getItem('theme')) {
                  currentTheme = localStorage.getItem('theme');
                } else if (
                  window.matchMedia &&
                  window.matchMedia('(prefers-color-scheme: dark)').matches
                ) {
                  currentTheme = 'dark';
                }

                document.querySelector('html').setAttribute('data-theme', currentTheme);

                localStorage.setItem('theme', currentTheme);
              })();
            `}
          </Script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
