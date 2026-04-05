import '../globals.css';

import type { Metadata, Viewport } from 'next';
import { cookies } from 'next/headers';
import { Suspense } from 'react';

import { HierarchyProvider } from '@/contexts/hierarchy';
import { UnitsProvider } from '@/contexts/units';
import { Body, Footer, Header, Main } from '@/layout';

import get from './get';

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

export default async function RootLayout({ children }: React.PropsWithChildren) {
  const cookieStore = await cookies();
  const theme = cookieStore.get('theme')?.value || 'auto';
  const units = cookieStore.get('units')?.value || 'imperial';

  const data = get();

  return (
    <html data-theme={theme} lang="en" suppressHydrationWarning>
      <Body theme={theme}>
        <Suspense fallback={null}>
          <HierarchyProvider>
            <UnitsProvider current={units}>
              <Header data={data} />
              <Main>
                {children}
              </Main>
              <Footer theme={theme} />
            </UnitsProvider>
          </HierarchyProvider>
        </Suspense>
      </Body>
    </html>
  );
}
