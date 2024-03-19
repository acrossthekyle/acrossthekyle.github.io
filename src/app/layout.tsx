import 'scss/global.scss';

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />

        <link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Lato:300,400,500,600,700" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat:500,900" rel="stylesheet" />

        <link rel="preload" as="image" href="https://ik.imagekit.io/acrossthekyle/gr20.jpeg?updatedAt=1695314654901" />
        <link rel="preload" as="image" href="https://ik.imagekit.io/acrossthekyle/westhighlandway.jpeg?updatedAt=1695314654426" />
        <link rel="preload" as="image" href="https://ik.imagekit.io/acrossthekyle/ocircuit.jpeg?updatedAt=1695314656648" />
        <link rel="preload" as="image" href="https://ik.imagekit.io/acrossthekyle/annapurna.jpeg?updatedAt=1695314659315" />
        <link rel="preload" as="image" href="https://ik.imagekit.io/acrossthekyle/altavia.jpeg?updatedAt=1695314660416" />
        <link rel="preload" as="image" href="https://ik.imagekit.io/acrossthekyle/tmb.jpeg?updatedAt=1695314658704" />
        <link rel="preload" as="image" href="https://ik.imagekit.io/acrossthekyle/camino.jpeg?updatedAt=1695314660391" />

        <meta name="title" content="Across The Kyle &mdash; Boundless Backpacker, Digital Developer" />
        <meta name="description" content="Boundless Backpacker, Digital Developer" />

        <title>Kyle &mdash; Boundless Backpacker, Digital Developer</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
