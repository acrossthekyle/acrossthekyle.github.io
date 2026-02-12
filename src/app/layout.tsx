import '../globals.css';

import type { Metadata, Viewport } from 'next';

import { Body, Footer } from '@/layout';

const description = `Hi, I'm Kyle: backpacker and engineer. I'm drawn to long trails and wild places, from the Himalayas to Patagonia. Between adventures, I build web apps in Chicago.`;

export const metadata: Metadata = {
  title: {
    template: `%s → Kyle → Backpacker and engineer.`,
    default: 'Home → Kyle → Backpacker and engineer.',
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
  description,
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
    title: 'Kyle → Backpacker and engineer',
    description,
    url: 'https://acrossthekyle.com',
    siteName: 'acrossthekyle',
    images: [
      {
        url: 'https://ik.imagekit.io/acrossthekyle/uploads/8ed54501-bdcb-40b7-9387-f2fc306db83d.png?q=80',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export const viewport: Viewport = {
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
        <Footer />
      </Body>
    </html>
  );
}
