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

type Props = {
  theme: string;
};

export default function Body({
  children,
  theme,
}: React.PropsWithChildren<Props>) {
  return (
    <body
      className={`${geistSans.variable} ${robotoMono.variable} ${styles.container}`}
    >
      {theme === 'auto' && (
        <Script id="theme-script">
          {`
            (function() {
              const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

              document.documentElement.setAttribute('data-theme', prefersDark.matches ? 'dark' : 'light');
            })();
          `}
        </Script>
      )}
      {children}
    </body>
  );
}
