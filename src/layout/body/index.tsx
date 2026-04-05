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
      <Script id="theme-script">
        {`
          (function () {
            let savedTheme = localStorage.getItem('theme') || 'auto';
            let currentTheme = savedTheme;

            if (savedTheme === 'auto') {
              const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

              currentTheme = prefersDark ? 'dark' : 'light';
            }

            document.documentElement.setAttribute('data-theme', currentTheme);
          })();
        `}
      </Script>
      {children}
    </body>
  );
}
