import { Geist, Momo_Signature } from 'next/font/google';

import styles from './stylesheet';

const geistSans = Geist({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

const momoSignature = Momo_Signature({
  display: 'swap',
  subsets: ['latin'],
  weight: '400',
  variable: '--font-momo-signature',
});

export default function Body({ children }: React.PropsWithChildren) {
  return (
    <body className={`${geistSans.variable} ${momoSignature.variable} ${styles.container}`}>
      <div className={styles.background} />
      {children}
    </body>
  );
}
