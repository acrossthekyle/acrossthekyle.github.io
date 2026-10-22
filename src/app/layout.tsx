import '../globals.css';

import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { PropsWithChildren, Suspense } from 'react';

import { Body, Footer } from '@/layout';

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
  variable: '--font-geist',
});

export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      className={`${sans.variable} h-full`}
      lang="en-US"
      suppressHydrationWarning
    >
      <Suspense fallback={null}>
        <Body>
          <ThemeProvider>
            {children}
            <Footer />
          </ThemeProvider>
        </Body>
      </Suspense>
    </html>
  );
}
