import { Geist } from 'next/font/google';

import styles from './stylesheet';

const sans = Geist({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

export default function Body({ children }: React.PropsWithChildren) {
  return (
    <body className={`${sans.variable} ${styles.container}`}>
      {children}
    </body>
  );
}
