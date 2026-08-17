import '../globals.css';

import type { Metadata } from 'next';
import { Geist, Playfair_Display } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { PropsWithChildren, Suspense } from 'react';

import ViewContext from '@/contexts/view';
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
        <ViewContext>
          <Body>
            <ThemeProvider>
              <main>
                {children}
              </main>
              <Footer />
            </ThemeProvider>
          </Body>
        </ViewContext>
      </Suspense>
    </html>
  );
}
