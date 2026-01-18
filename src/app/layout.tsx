import '../globals.css';

import type { Metadata, Viewport } from 'next';

import { Body, Loader } from '@/layout';

import { introduction } from './constants';

export const metadata: Metadata = {
  title: {
    template: `%s → Kyle → A backpacker and software engineer.`,
    default: 'Home → Kyle → A backpacker and software engineer.',
  },
  keywords: [
    'across',
    'the',
    'kyle',
    'Kyle',
    'Gilbert',
    'Thru-hiker',
    'Backpacker',
    'UI Developer',
    'Software Engineer',
  ],
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
        url: 'https://ik.imagekit.io/acrossthekyle/uploads/8ed54501-bdcb-40b7-9387-f2fc306db83d.png?q=50',
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
    <html data-theme="dark" lang="en">
      <Body>
        {children}
        <Loader />
      </Body>
    </html>
  );
}
