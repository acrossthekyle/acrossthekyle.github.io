import '../globals.css';

import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { ThemeProvider } from 'next-themes';
import { PropsWithChildren, Suspense } from 'react';

import DialogProvider from '@/contexts/dialog';
import FilterProvider from '@/contexts/filter';
import OptionsProvider from '@/contexts/options';
import SizeProvider from '@/contexts/size';
import SortProvider from '@/contexts/sort';
import ViewProvider from '@/contexts/view';
import { Body } from '@/layout';

import Eggs from './eggs';

export const metadata: Metadata = {
  title: 'Kyle – A collection of my hikes, summits, and experiences',
  formatDetection: {
    telephone: false,
    date: false,
    email: false,
    address: false,
  },
};

export default async function RootLayout({ children }: PropsWithChildren) {
  const headersList = await headers();
  const units = headersList.get('x-units-system') || 'metric';

  return (
    <html lang="en-US" suppressHydrationWarning>
      <Suspense fallback={null}>
        <Eggs />
        <DialogProvider>
          <ViewProvider>
            <OptionsProvider units={units}>
              <SizeProvider>
                <FilterProvider>
                  <SortProvider>
                    <Body>
                      <ThemeProvider>
                        {children}
                      </ThemeProvider>
                    </Body>
                  </SortProvider>
                </FilterProvider>
              </SizeProvider>
            </OptionsProvider>
          </ViewProvider>
        </DialogProvider>
      </Suspense>
    </html>
  );
}
