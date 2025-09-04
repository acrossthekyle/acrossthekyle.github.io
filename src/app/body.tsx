import { Geist } from 'next/font/google';

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
      {children}
    </body>
  );
}
