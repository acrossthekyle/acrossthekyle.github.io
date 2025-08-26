'use client';

import { Geist } from 'next/font/google';

import { useHierarchy } from '@/hooks/useHierarchy';

import styles from './stylesheet';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

type Props = {
  children: React.ReactNode;
};

export default function Body({ children }: Props) {
  const { isOnParent, isOnRoot } = useHierarchy();

  return (
    <body
      className={`${geistSans.variable} ${styles.body(isOnRoot, isOnParent)}`}
    >
      {children}
    </body>
  );
}
