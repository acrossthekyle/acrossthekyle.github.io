'use client'

import 'scss/globals.scss';

import { useEffect } from 'react';

import { SettingsProvider } from 'contexts/settings';

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
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
      <body>
        <div className="loading"></div>
        <SettingsProvider>
          {children}
        </SettingsProvider>
      </body>
    </html>
  );
};
