import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import type { Collection } from '@/types';

import { styles } from './stylesheet';

type Props = {
  recent: Collection;
};

export default function Content({ recent }: Props) {
  return (
    <aside className={styles.wrapper}>
      <div className={styles.divider} role="presentation" />
      <section className={styles.section}>
        <h2 className={styles.heading}>
          Upcoming
          <span className={styles.footnote}>
            What's ahead
          </span>
          <span className={styles.index}>
            <span>01</span>
            <span>/</span>
            <span>04</span>
          </span>
        </h2>
        <p className={styles.paragraph}>
          Here's a <span className={styles.emphasis}>sneak peek</span> at what's ahead for {new Date().getFullYear()} and beyond:
        </p>
        <ul className={styles.list}>
          <li>&mdash; <span className={styles.emphasis}>Cusco / Sacred Valley</span></li>
          <li>&mdash; <span className={styles.emphasis}>Salkanatey Trek - Macchu Pichu</span></li>
          <li>&mdash; <span className={styles.emphasis}>Puerto Maldonado (Amazon Eco Lodge)</span></li>
        </ul>
      </section>
      <div className={styles.divider} role="presentation" />
      <section className={styles.section}>
        <h2 className={styles.heading}>
          Interim
          <span className={styles.footnote}>
            Between adventures
          </span>
          <span className={styles.index}>
            <span>02</span>
            <span>/</span>
            <span>04</span>
          </span>
        </h2>
        <p className={styles.paragraph}>
          I love getting lost in <span className={styles.emphasis}>books</span>, <span className={styles.emphasis}>YouTube</span> videos, <span className={styles.emphasis}>podcasts</span>, <span className={styles.emphasis}>films</span>, and anything else that <span className={styles.emphasis}>fuels the imagination</span> and inspires critical thinking.
        </p>
        <p className={styles.paragraph}>
          Recent reads: <span className={styles.emphasis}>Death's End</span>, <span className={styles.emphasis}>A Clash of Kings</span>, & <span className={styles.emphasis}>Dune</span>
        </p>
        <p className={styles.paragraph}>
          Favorite channels: <span className={styles.emphasis}>Star Talk Radio</span>, <span className={styles.emphasis}>The Art of Storytelling</span>, <span className={styles.emphasis}>Justin Outdoors</span>, & <span className={styles.emphasis}>New Rockstars</span>
        </p>
        <p className={styles.paragraph}>
          Daily listens: <span className={styles.emphasis}>Up First</span>, & <span className={styles.emphasis}>Everything Everywhere Daily</span>
        </p>
      </section>
      <div className={styles.divider} role="presentation" />
      <section className={styles.section}>
        <h2 className={styles.heading}>
          Connect
          <span className={styles.footnote}>
            Networking stuff
          </span>
          <span className={styles.index}>
            <span>03</span>
            <span>/</span>
            <span>04</span>
          </span>
        </h2>
        <p className={styles.paragraph}>
          Sometimes I post snapshots from my travels on <Link
            className={`${styles.emphasis} ${styles.external}`}
            href="https://instagram.com/acrossthekyle"
            target="_blank"
          >Instagram<ArrowUpRight aria-hidden="true" className={styles.arrow} /></Link> but this website is the way to stay up to date.
        </p>
        <p className={styles.paragraph}>
          <span className={styles.emphasis}>Want to say hello?</span> Email is the best way to get in touch with me.
        </p>
        <Link className={styles.link} href="mailto:hello@acrossthekyle.com">
          <span>/</span>
          <span>Compose an email</span>
          <span>/</span>
        </Link>
      </section>
      <div className={styles.divider} role="presentation" />
      <section className={styles.section}>
        <h2 className={styles.heading}>
          Professionaly
          <span className={styles.footnote}>
            My career
          </span>
          <span className={styles.index}>
            <span>04</span>
            <span>/</span>
            <span>04</span>
          </span>
        </h2>
        <p className={styles.paragraph}>
          I'm an enthusiastic <span className={styles.emphasis}>software developer</span> who <span className="font-medium">loves</span> building web applications with an approach rooted in a <span className={styles.emphasis}>genuine thrill for writing code</span>, even after {new Date().getFullYear() - 2010} years.
        </p>
        <p className={styles.paragraph}>
          Currently: <span className={styles.emphasis}>Senior Engineer</span> at Optum Digital since 2018.
        </p>
        <Link
          className={styles.link}
          href="/resume.pdf"
          target="_blank"
        >
          <span>/</span>
          <span>View entire resume [PDF]</span>
          <span>/</span>
        </Link>
      </section>
    </aside>
  );
}
