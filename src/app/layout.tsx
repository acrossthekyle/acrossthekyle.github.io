'use client'

import 'scss/globals.scss';

import { useEffect } from 'react';
import localFont from 'next/font/local';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { SettingsProvider } from 'contexts/settings';
import { SlotsProvider } from 'contexts/slots';
import styles from 'scss/app/app.module.scss'

const fontFamily = localFont({ src: '../fonts/styrene.otf' });

type Props = {
  children: React.ReactNode;
  details: React.ReactNode;
};

export default function RootLayout({ children, details }: Props) {
  const pathname = usePathname();

  useEffect(() => {
    console.log('https://github.com/acrossthekyle/acrossthekyle.github.io');
    console.log('Hint: press "I" on the keyboard to toggle imageless mode');
    console.log('Hint: press "D" on the keyboard to toggle light/dark mode');
    console.log('Hint: press "C" on the keyboard to toggle monochrome mode');
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />

        <link href="https://fonts.googleapis.com/css?family=Lato:300,400,500,600,700" rel="stylesheet" />

        <meta name="title" content="Kyle &mdash; A Thru Hiker by design | Developer by trade" />
        <meta name="description" content="I'm Kyle &mdash; a thru hiker by design, and a developer by trade. I currently live in the concrete jungles of Chicago." />

        <title>Kyle &mdash; A Thru Hiker by design | A Developer by trade</title>
      </head>
      <body className={fontFamily.className}>
        <div className="loading"></div>
        <SettingsProvider>
          <SlotsProvider>
            <main className={styles.main} monochromeable="true">
              <header>
                <Link href="/" aria-label="home">
                  <div />
                </Link>
                <h1>
                  Thru-hiker by design
                </h1>
                <h2>
                  Developer by trade
                </h2>
                <h3>Chicago</h3>
              </header>
              <section>
                <aside>
                  <nav>
                    <Link data-active={pathname.includes('adventures')} href="/adventures">Adventures</Link>
                    <Link data-active={pathname === '/gallery'} href="/gallery">Gallery</Link>
                    <Link data-active={pathname === '/about'} href="/about">About</Link>
                  </nav>
                  {details}
                </aside>
                {children}
              </section>
            </main>
          </SlotsProvider>
        </SettingsProvider>
      </body>
    </html>
  );
};
