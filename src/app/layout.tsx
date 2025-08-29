import '../globals.css';

import type { Metadata, Viewport } from 'next';
import { Suspense } from 'react';

import Hierarchy from '@/contexts/hierarchy';
import Layout from '@/layouts/root';
import { KeyboardListener } from '@/listeners';

import Body from './body';

export const metadata: Metadata = {
  title: {
    template: '%s | K',
    default: 'K',
  },
  keywords: ['across', 'the', 'kyle', 'Kyle', 'Gilbert', 'Thru-hiker', 'UI Developer'],
  description: `I'm a thru-hiker and UI developer seeking new ways to move forward with intention and curiosity`,
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
    description: `I'm a thru-hiker and UI developer seeking new ways to move forward with intention and curiosity`,
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
  themeColor: '#000000',
}

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html className="h-full" lang="en">
      <Suspense>
        <Hierarchy>
          <Body>
            <KeyboardListener />
            <Layout>
              {children}
            </Layout>
          </Body>
        </Hierarchy>
      </Suspense>
    </html>
  );
}
