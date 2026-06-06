import '../globals.css';

import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import { headers } from 'next/headers';
import { ThemeProvider } from 'next-themes';
import { PropsWithChildren, Suspense } from 'react';

import DialogProvider from '@/contexts/dialog';
import OptionsProvider from '@/contexts/options';
import { Body, Footer, Header, Main, Menu } from '@/layout';

export const metadata: Metadata = {
  title: {
    template: `Kyle Gilbert ⌁ %s`,
    default: 'Kyle Gilbert',
  },
  formatDetection: {
    telephone: false,
    date: false,
    email: false,
    address: false,
  },
};

const font = Geist({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

export default async function RootLayout({ children }: PropsWithChildren) {
  const headersList = await headers();
  const units = headersList.get('x-units-system') || 'metric';

  return (
    <html className={font.variable} lang="en-US" suppressHydrationWarning>
      <Suspense fallback={null}>
        <DialogProvider>
          <OptionsProvider units={units}>
            <Body>
              <ThemeProvider>
                <Header />
                <Main>
                  {children}
                </Main>
                <Footer />
                <Menu />
              </ThemeProvider>
            </Body>
          </OptionsProvider>
        </DialogProvider>
      </Suspense>
    </html>
  );
}
