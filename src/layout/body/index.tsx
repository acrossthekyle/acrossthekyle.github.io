import { Geist } from 'next/font/google';
import Script from 'next/script';

import styles from './stylesheet';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

type Props = {
  children: React.ReactNode;
};

export default function Body({ children }: Props) {
  return (
    <body
      className={`${geistSans.variable} ${styles.body}`}
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
