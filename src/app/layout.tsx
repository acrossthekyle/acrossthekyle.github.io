import '../globals.css';

import type { Metadata, Viewport } from 'next';
import { Geist } from 'next/font/google';

import Events from '@/context/events';
import Layout from '@/layouts/root';

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
  themeColor: '#000000',
}

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html className="h-full" lang="en">
      <body className={`${geistSans.variable} antialiased h-full`}>
        <Events>
          <Layout>
            {children}
          </Layout>
        </Events>
      </body>
    </html>
  );
}
