import '../globals.css';

import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { PropsWithChildren, Suspense } from 'react';

import { Body, Footer, Header, Main } from '@/layout';

export const metadata: Metadata = {
  title: {
    template: `%s ⌁ Kyle`,
    default: 'Index ⌁ Kyle',
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
  return (
    <html className={font.variable} lang="en-US" suppressHydrationWarning>
      <Suspense fallback={null}>
        <Body>
          <ThemeProvider>
            <Header />
            <Main>
              {children}
            </Main>
            <Footer />
          </ThemeProvider>
        </Body>
      </Suspense>
    </html>
  );
}
