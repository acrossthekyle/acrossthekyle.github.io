import '../globals.css';

import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { Suspense } from 'react';

import DialogProvider from '@/contexts/dialog';
import UnitsProvider from '@/contexts/units';
import ViewProvider from '@/contexts/view';
import { Body, Footer } from '@/layout';

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

export default async function RootLayout({ children }: React.PropsWithChildren) {
  const cookieStore = await cookies();
  const theme = cookieStore.get('theme')?.value || 'auto';
  const units = cookieStore.get('units')?.value || 'imperial';

  return (
    <html data-theme={theme} lang="en-US" suppressHydrationWarning>
      <Suspense fallback={null}>
        <DialogProvider>
          <ViewProvider>
            <UnitsProvider current={units}>
              <Body>
                {children}
                <Footer theme={theme} units={units} />
              </Body>
            </UnitsProvider>
          </ViewProvider>
        </DialogProvider>
      </Suspense>
    </html>
  );
}
