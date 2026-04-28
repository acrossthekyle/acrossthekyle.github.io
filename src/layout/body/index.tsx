import { Geist, Yellowtail } from 'next/font/google';

import styles from './stylesheet';

const sans = Geist({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

const signature = Yellowtail({
  display: 'swap',
  subsets: ['latin'],
  weight: '400',
  variable: '--font-momo-signature',
});

export default function Body({ children }: React.PropsWithChildren) {
  return (
    <body className={`${sans.variable} ${signature.variable} ${styles.container}`}>
      <div className={styles.background} />
      {children}
    </body>
  );
}
