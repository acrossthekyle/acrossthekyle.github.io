import Link from 'next/link';

import type { Collection } from '@/types';

import { styles } from './stylesheet';

type Props = {
  recent: Collection;
};

export default function Content({ recent }: Props) {
  return (
    <>
      <section className={styles.section}>
        <h2 className={styles.heading}>
          Backstory
          <span className={styles.index}>
            <span>01</span>
            <span>/</span>
            <span>05</span>
          </span>
        </h2>
        <p className={styles.paragraph}>
          <span className={styles.emphasis}>My drive and inspiration</span> formed in the Andes mountains of S. America while exploring the Torres del Paine region of Patagonia.
        </p>
        <p className={styles.paragraph}>
          Thereafter I embarked on my debut long-distance backpacking adventure, walking a mere 600 miles across N. Spain via a route known as El Camino De Santiago.
        </p>
        <p className={styles.paragraph}>
          Since then I've travelled to numerous destinations, spent hundreds of days traipsing through nature and over mountain passes all around the world, and reached the tops of mountains.
        </p>
        <p className={styles.paragraph}>
          This website is a <span className="italic">nearly complete</span> collection of those experiences.
        </p>
        <span className={styles.squares} role="presentation">
          <span className={styles.square} />
          <span className={styles.square} />
          <span className={styles.square} />
        </span>
        <Link className={styles.link} href="/wanderings">
          <span>/</span>
          <span>View the archives</span>
          <span>/</span>
        </Link>
      </section>
      <section className={styles.section}>
        <h2 className={styles.heading}>
          Upcoming
          <span className={styles.index}>
            <span>02</span>
            <span>/</span>
            <span>05</span>
          </span>
        </h2>
        <p className={styles.paragraph}>
          <span className={styles.emphasis}>See what's on the docket</span> for {new Date().getFullYear()} and beyond.
        </p>
        <span className={styles.squares} role="presentation">
          <span className={styles.square} />
        </span>
        <Link
          className={styles.link}
          href="/upcoming"
        >
          <span>/</span>
          <span>See what's rostered</span>
          <span>/</span>
        </Link>
      </section>
      <section className={styles.section}>
        <h2 className={styles.heading}>
          Interim
          <span className={styles.index}>
            <span>03</span>
            <span>/</span>
            <span>05</span>
          </span>
        </h2>
        <p className={styles.paragraph}>
          <span className={styles.emphasis}>Between adventures</span> I love getting lost in books, YouTube videos, podcasts, films, and anything else that fuels the imagination and inspires critical thinking.
        </p>
        <span className={styles.squares} role="presentation">
          <span className={styles.square} />
          <span className={styles.square} />
        </span>
      </section>
      <section className={styles.section}>
        <h2 className={styles.heading}>
          Connect
          <span className={styles.index}>
            <span>04</span>
            <span>/</span>
            <span>05</span>
          </span>
        </h2>
        <p className={styles.paragraph}>
          Sometimes I post snapshots from my travels on Instagram, but this website is the way to stay up to date.
        </p>
        <p className={styles.paragraph}>
           <Link
            className={styles.social}
            href="https://instagram.com/acrossthekyle"
            target="_blank"
          >
            <span>&mdash;</span>
            <span>Instagram</span>
          </Link>
        </p>
        <p className={styles.paragraph}>
          <span className={styles.emphasis}>Want to say hello?</span> Email is the best way to get in touch with me.
        </p>
        <span className={styles.squares} role="presentation">
          <span className={styles.square} />
          <span className={styles.square} />
          <span className={styles.square} />
        </span>
        <Link className={styles.link} href="mailto:hello@acrossthekyle.com">
          <span>/</span>
          <span>Send a letter</span>
          <span>/</span>
        </Link>
      </section>
      <section className={styles.section}>
        <h2 className={styles.heading}>
          Professionaly
          <span className={styles.index}>
            <span>05</span>
            <span>/</span>
            <span>05</span>
          </span>
        </h2>
        <p className={styles.paragraph}>
          <span className={styles.emphasis}>I'm an enthusiastic software developer</span> who <span className="font-medium">loves</span> building web applications with an approach rooted in a genuine thrill for writing code, even after {new Date().getFullYear() - 2010} years.
        </p>
        <span className={styles.squares} role="presentation">
          <span className={styles.square} />
        </span>
        <Link
          className={styles.link}
          href="/resume.pdf"
          target="_blank"
        >
          <span>/</span>
          <span>Read the resume</span>
          <span>/</span>
        </Link>
      </section>
    </>
  );
}
