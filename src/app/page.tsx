import './styles.scss';

import Link from 'next/link'

export const IMAGE_BASE = 'https://ik.imagekit.io/acrossthekyle';

export function getImageUrl(id: string, updatedAt: string) {
  return `${IMAGE_BASE}/${id}?updatedAt=${updatedAt}`;
}

export default function Page() {
  return (
    <>
      <header>
        <h1>
          <span>ACROSS THE </span>KYLE
        </h1>
        <h2>Backpacker, Developer</h2>
      </header>
      <div className="parallax background-one" aria-hidden="true" tabIndex={-1} />
      <div className="parallax background-two" aria-hidden="true" tabIndex={-1} />
      <div className="parallax background-three" aria-hidden="true" tabIndex={-1} />
      <div className="parallax waves" aria-hidden="true" tabIndex={-1}><div /></div>
      <div className="parallax foreground" aria-hidden="true" tabIndex={-1} />
      <section>
        <article>
          <p>
            Hello, my name's <span>Kyle</span> &mdash; I'm a developer by trade, and
            <span> a backpacker by design</span>. I currently live in the concrete jungles of Chicago, and
            I have a love for hiking trails that are hundreds of miles long.
          </p>
        </article>
        <figure
          role="img"
          style={{ backgroundImage: `url(${getImageUrl('backpacking-1.jpeg', '1709072809903')})` }}
        >
          <figcaption>Grande Randonnée 20, France</figcaption>
        </figure>
      </section>
    </>
  );
}
