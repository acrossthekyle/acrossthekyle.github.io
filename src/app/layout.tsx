'use client'

import 'scss/globals.scss';

import { useEffect } from 'react';

import { SettingsProvider } from 'contexts/settings';

import Header from './header';
import Settings from './settings';

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  useEffect(() => {
    console.log('Want to see the source code?', 'https://github.com/acrossthekyle/acrossthekyle.github.io');
    console.log('Press "D" on the keyboard to toggle light/dark mode');
    console.log('Press "I" on the keyboard to toggle imageless mode');
    console.log('Press "M" on the keyboard to toggle monochrome mode');
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />

        <link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Lato:300,400,500,600,700" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat:500,600,700,800,900" rel="stylesheet" />

        <link rel="preload" as="image" href="https://ik.imagekit.io/acrossthekyle/gr20.jpeg?updatedAt=1695314654901" />
        <link rel="preload" as="image" href="https://ik.imagekit.io/acrossthekyle/westhighlandway.jpeg?updatedAt=1695314654426" />
        <link rel="preload" as="image" href="https://ik.imagekit.io/acrossthekyle/ocircuit.jpeg?updatedAt=1695314656648" />
        <link rel="preload" as="image" href="https://ik.imagekit.io/acrossthekyle/annapurna.jpeg?updatedAt=1695314659315" />
        <link rel="preload" as="image" href="https://ik.imagekit.io/acrossthekyle/altavia.jpeg?updatedAt=1695314660416" />
        <link rel="preload" as="image" href="https://ik.imagekit.io/acrossthekyle/tmb.jpeg?updatedAt=1695314658704" />
        <link rel="preload" as="image" href="https://ik.imagekit.io/acrossthekyle/camino.jpeg?updatedAt=1695314660391" />

        <meta name="title" content="Across The Kyle &mdash; Boundless Backpacker, Digital Developer" />
        <meta name="description" content="Boundless Backpacker, Digital Developer" />

        <title>Kyle &mdash; Thru Hiker | Dev</title>
      </head>
      <body>
        <div className="loading">
          <svg preserveAspectRatio="none" viewBox="0 24 150 28" xmlns="http://www.w3.org/2000/svg">
            <path x="48" y="0" fill="rgba(255, 255, 255, 0.7)" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            <path x="48" y="3" fill="rgba(255, 255, 255, 0.5)" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            <path x="48" y="5" fill="rgba(255, 255, 255, 0.3)" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            <path x="48" y="7" fill="rgba(255, 255, 255, 1)" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </svg>
        </div>
        <main>
          <SettingsProvider>
            <Header />
            <Settings />
            {children}
          </SettingsProvider>
        </main>
      </body>
    </html>
  )
}
