import '../globals.css';

import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { ThemeProvider } from 'next-themes';
import { PropsWithChildren, Suspense } from 'react';

import DialogProvider from '@/contexts/dialog';
import OptionsProvider from '@/contexts/options';
import { Body, Dialog, Footer, Header, Main } from '@/layout';

import Eggs from './eggs';

export const metadata: Metadata = {
  title: {
    template: `Kyle Gilbert • %s`,
    default: 'Kyle Gilbert',
  },
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
          <OptionsProvider units={units}>
            <Body>
              <ThemeProvider>
                <Header />
                <Main>
                  {children}
                </Main>
                <Footer />
                <Dialog />
              </ThemeProvider>
            </Body>
          </OptionsProvider>
        </DialogProvider>
      </Suspense>
    </html>
  );
}
