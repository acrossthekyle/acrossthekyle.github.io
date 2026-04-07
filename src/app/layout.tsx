import '../globals.css';

import type { Metadata, Viewport } from 'next';
import { cookies } from 'next/headers';
import { Suspense } from 'react';

import { HierarchyProvider } from '@/contexts/hierarchy';
import { UnitsProvider } from '@/contexts/units';
import { Body, Footer, Header } from '@/layout';

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
      <body className="bg-(--background) text-(--foreground)">
        <header className="fixed top-0 left-0 right-0 z-100 h-20 bg-(--background)">
          Header
        </header>
        <main>

          <div className="sticky top-20 z-29 flex justify-between">
            <div className="w-2 h-2 ml-4 bg-[radial-gradient(8px_at_100%_100%,transparent_98%,var(--background))]" />
            <div className="w-2 h-2 mr-4 bg-[radial-gradient(8px_at_0%_100%,transparent_98%,var(--background))]" />
          </div>

          <div className="relative z-28 min-h-[calc(200vh)] flex items-start mt-18 mx-4 px-4 pt-4 bg-slate-600">
            Main Inner
          </div>

          <div className="sticky bottom-20 -mt-2 z-29 flex justify-between">
            <div className="w-2 h-2 ml-4 bg-[radial-gradient(8px_at_100%_0%,transparent_98%,var(--background))]" />
            <div className="w-2 h-2 mr-4 bg-[radial-gradient(8px_at_0%_0%,transparent_98%,var(--background))]" />
          </div>

        </main>

        <footer>
          <div className="relative z-35 h-[calc(100vh-5rem)] w-full bg-(--background)">
            Inner footer
          </div>
          <p className="fixed z-100 bottom-0 left-0 right-0 h-20 flex items-center justify-center bg-(--background)">Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
        </footer>
      </body>
      {/*<Body theme={theme}>
        <Suspense fallback={null}>
          <HierarchyProvider>
            <UnitsProvider current={units}>
              <Header data={data} />
              {children}
              <Footer theme={theme} />
            </UnitsProvider>
          </HierarchyProvider>
        </Suspense>
      </Body>*/}
    </html>
  );
}
