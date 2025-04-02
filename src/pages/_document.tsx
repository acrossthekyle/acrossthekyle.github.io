import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html data-theme="light" lang="en-US">
      <Head>
        <meta charSet="utf-8" />

        <meta name="author" content="Kyle Gilbert" />
        <meta
          name="title"
          content="Kyle &mdash; A Thru Hiker and Progammer based in Chicago"
        />
        <meta
          name="description"
          content="Hello, I'm Kyle! Thru-hiking is a way for me to experience all that this planet has to offer, and I have been on several of them all around the world. I also like to summit peaks in the Rocky Mountains. I also don't mind playing the tourist every now and then and experiencing someplace new."
        />
        <meta name="robots" content="index, follow" />
        <meta name="generator" content="NextJS" />
        <meta
          name="theme-color"
          content="#ffffff"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#1d1d1d"
          media="(prefers-color-scheme: dark)"
        />
        <meta name="color-scheme" content="light dark" />
        <meta name="apple-mobile-web-app-title" content="@acrossthekyle" />
        <meta name="application-name" content="@acrossthekyle" />

        <meta
          property="og:image"
          content="https://ik.imagekit.io/acrossthekyle/uploads/2024/06/28/04f81498-bd5d-471f-93c6-5f1b5ba4201f.jpeg?tr=w-500,q-33"
        />
        <meta
          property="og:image:alt"
          content="A Thru-Hiker and Programmer Based in Chicago"
        />

        <meta
          name="twitter:url"
          content="https://www.acrossthekyle.com/?src=twitter"
        />
        <meta
          name="twitter:image:src"
          content="https://ik.imagekit.io/acrossthekyle/uploads/2024/06/28/04f81498-bd5d-471f-93c6-5f1b5ba4201f.jpeg?tr=w-500,q-33"
        />
        <meta
          name="twitter:image:alt"
          content="A Thru-Hiker and Programmer Based in Chicago"
        />
        <meta name="twitter:creator" content="@acrossthekyle" />
        <meta name="twitter:site" content="@acrossthekyle" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />

        <link rel="canonical" href="https://www.acrossthekyle.com" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* eslint-disable-next-line @next/next/google-font-display */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
        {/* eslint-disable-next-line @next/next/google-font-display */}
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
