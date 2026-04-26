import '../globals.css';

import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { PropsWithChildren, Suspense } from 'react';

import DialogProvider from '@/contexts/dialog';
import FilterProvider from '@/contexts/filter';
import SizeProvider from '@/contexts/size';
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

export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en-US" suppressHydrationWarning>
      <Suspense fallback={null}>
        <Eggs />
        <DialogProvider>
          <ViewProvider>
            <UnitsProvider>
              <SizeProvider>
                <FilterProvider>
                  <Body>
                    <ThemeProvider>
                      {children}
                    </ThemeProvider>
                  </Body>
                </FilterProvider>
              </SizeProvider>
            </UnitsProvider>
          </ViewProvider>
        </DialogProvider>
      </Suspense>
    </html>
  );
}
