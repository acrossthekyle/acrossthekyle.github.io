import { Geist, Roboto_Mono } from 'next/font/google';
import Script from 'next/script';

import styles from './stylesheet';

const geistSans = Geist({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

const robotoMono = Roboto_Mono({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-roboto-mono',
});

export default function Body({ children }: React.PropsWithChildren) {
  return (
    <body
      className={`${geistSans.variable} ${robotoMono.variable} ${styles.container}`}
    >
      <Script
        id="theme-script"
      >
        {`
          (function () {
            let currentTheme = 'light';

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
      {children}
    </body>
  );
}
