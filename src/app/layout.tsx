import '../globals.css';

import type { Metadata } from 'next';
import { Geist, Playfair_Display } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { PropsWithChildren, Suspense } from 'react';

import { Body, Footer, Header } from '@/layout';

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

const sans = Geist({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-sans',
});

const serif = Playfair_Display({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-serif',
});

export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    <html className={`${sans.variable} ${serif.variable}`} lang="en-US" suppressHydrationWarning>
      <Suspense fallback={null}>
        <Body>
          <ThemeProvider>
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </Body>
      </Suspense>
    </html>
  );
}
