import '../globals.css';

import type { Metadata, Viewport } from 'next';
import { cookies } from 'next/headers';
import { Suspense } from 'react';

import { HierarchyProvider } from '@/contexts/hierarchy';
import { UnitsProvider } from '@/contexts/units';
import { Body, Callouts, Footer, Main } from '@/layout';

import get from './get';

export const metadata: Metadata = {
  title: {
    template: `%s`,
    default: 'Kyle Gilbert',
  },
  openGraph: {
    title: 'Kyle Gilbert',
    images: [
      {
        url: 'https://ik.imagekit.io/acrossthekyle/uploads/811aea50-4482-4e4a-9813-3dbb9e80a9ab.jpg',
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: '#0c0c0c',
}

export default async function RootLayout({ children }: React.PropsWithChildren) {
  const cookieStore = await cookies();
  const theme = cookieStore.get('theme')?.value || 'auto';
  const units = cookieStore.get('units')?.value || 'imperial';

  const { job, trails } = await get();

  return (
    <html data-theme={theme} lang="en-US" suppressHydrationWarning>
      <Body>
        <Suspense fallback={null}>
          <HierarchyProvider>
            <UnitsProvider current={units}>
              <Callouts data={{ job, trail: trails.recent }} />
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
