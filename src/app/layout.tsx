import '../globals.css';

import type { Metadata, Viewport } from 'next';

import History from '@/contexts/history';
import { LayoutBody, LayoutLoader } from '@/layout';

import { introduction } from './constants';
import styles from './stylesheet';

export const metadata: Metadata = {
  title: {
    template: `%s → Kyle → A backpacker and engineer making moves.`,
    default: 'Home → Kyle → A backpacker and engineer making moves.',
  },
  keywords: ['across', 'the', 'kyle', 'Kyle', 'Gilbert', 'Thru-hiker', 'UI Developer'],
  description: introduction,
  authors: [{ name: 'Kyle Gilbert' }],
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Kyle',
    description: introduction,
    url: 'https://acrossthekyle.com',
    siteName: 'acrossthekyle',
    images: [
      {
        url: 'https://ik.imagekit.io/acrossthekyle/uploads/2023/06/21/05769f04-5b00-4fd5-a233-55c00c9871c5.jpeg?q=50',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export const viewport: Viewport = {
  maximumScale: 1,
  themeColor: '#000000',
}

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html className={styles.html} data-theme="dark" lang="en">
      <History>
        <LayoutBody>
          {children}
          <LayoutLoader />
        </LayoutBody>
      </History>
    </html>
  );
}
