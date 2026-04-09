import { Geist, Roboto_Mono } from 'next/font/google';

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
    <body className={`${geistSans.variable} ${robotoMono.variable} ${styles.container}`}>
      {children}
    </body>
  );
}
