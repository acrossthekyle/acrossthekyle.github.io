import '../globals.css';

import type { Metadata, Viewport } from 'next';
import { Suspense } from 'react';

import { HierarchyProvider } from '@/contexts/hierarchy';
import { Body, Footer, Header, Main } from '@/layout';

const description = `Kyle is a Chicago-based self-taught software engineer and millennial who balances his lifelong passion for creating web apps with a love for long-distance backpacking adventures, and star trek.`;

export const metadata: Metadata = {
  title: {
    template: `Kyle Gilbert • %s`,
    default: 'Kyle Gilbert',
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
    title: 'Kyle Gilbert',
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
        <Suspense fallback={null}>
          <HierarchyProvider>
            <Header />
            <Main>
              {children}
            </Main>
            <Footer />
          </HierarchyProvider>
        </Suspense>
      </Body>
    </html>
  );
}
