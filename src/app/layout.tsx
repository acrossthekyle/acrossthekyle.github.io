import '../globals.css';

import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { Suspense } from 'react';

import DialogProvider from '@/contexts/dialog';
import UnitsProvider from '@/contexts/units';
import ViewProvider from '@/contexts/view';
import { Body } from '@/layout';

import Eggs from './eggs';

export const metadata: Metadata = {
  title: 'Kyle',
  formatDetection: {
    telephone: false,
    date: false,
    email: false,
    address: false,
  },
};

export default async function RootLayout({
  children,
}: React.PropsWithChildren) {
  const cookieStore = await cookies();
  const theme = cookieStore.get('theme')?.value || 'auto';
  const units = cookieStore.get('units')?.value || 'imperial';

  return (
    <html data-theme={theme} lang="en-US" suppressHydrationWarning>
      <Suspense fallback={null}>
        <Eggs />
        <DialogProvider>
          <ViewProvider>
            <UnitsProvider current={units}>
              <Body>
                {children}
              </Body>
            </UnitsProvider>
          </ViewProvider>
        </DialogProvider>
      </Suspense>
    </html>
  );
}
