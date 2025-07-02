import '../globals.css';

import type { Metadata, Viewport } from 'next';
import { Geist } from 'next/font/google';
import { ReactNode } from 'react';

import Stack from '@/context/stack';
import Layout from '@/views/layout';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Kyle Gilbert',
  description: `Backpacker/web developer based in Chicago with my partner and our dog Dax.`,
  authors: [{ name: 'Kyle Gilbert' }],
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#262626',
}

export default function RootLayout({
  children,
  modal,
}: {
  children: ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <Stack>
          <Layout>
            {children}
          </Layout>
          {modal}
        </Stack>
      </body>
    </html>
  );
}
