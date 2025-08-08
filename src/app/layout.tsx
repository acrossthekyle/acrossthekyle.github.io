import '../globals.css';

import type { Metadata, Viewport } from 'next';
import { Geist } from 'next/font/google';

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

export default function RootLayout() {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <h1>Under Maintenance</h1>
      </body>
    </html>
  );
}
