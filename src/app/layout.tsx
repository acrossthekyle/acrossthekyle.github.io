import '../globals.css';

import type { Metadata, Viewport } from 'next';
import { cookies } from 'next/headers';
import { Suspense } from 'react';

import DialogProvider from '@/contexts/dialog';
import { Body, Header, Footer, Main } from '@/layout';

export const metadata: Metadata = {
  title: {
    template: `%s`,
    default: 'Kyle',
  },
  openGraph: {
    title: 'Kyle',
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
  const view = cookieStore.get('view')?.value || 'albums';

  return (
    <html data-theme={theme} lang="en-US" suppressHydrationWarning>
      <Suspense fallback={null}>
        <DialogProvider>
          <Body>
            <Header view={view} />
            <Main>
              {children}
            </Main>
            <Footer theme={theme} units={units} />
          </Body>
        </DialogProvider>
      </Suspense>
    </html>
  );
}
