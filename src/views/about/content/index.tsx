import Link from 'next/link';

import styles from './stylesheet';

export default function Content() {
  return (
    <>
      <section className={styles.section}>
        <h2 className={styles.heading}>
          Backstory
          <span className={styles.index}>01</span>
        </h2>
        <p className={styles.paragraph}>
          My obsession with long-distance trails, alpine peaks, and a curiosity to explore first arose in the Andes mountains of S. America at an elevation of 10,611 feet as I stared up at the leading edge of a calving glacier during a vacation to Chile in 2016, and further cemented by a visit to the Torres del Paine national park in Patagonia a few days later.
        </p>
        <p className={styles.paragraph}>
          It left such an impression on me that I ended up embarking on my first long-distance backpacking adventure two years later by walking 600 miles across Northern Spain on a route called El Camino De Santiago.
        </p>
        <p className={styles.paragraph}>
          Since then I've <Link className={styles.link} href="/index">wandered</Link> to numerous destinations, and spent hundreds of days traipsing thousands of miles through nature and over mountain passes all around the world.
        </p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.heading}>
          Presently
          <span className={styles.index}>02</span>
        </h2>
        <p className={styles.paragraph}>
          Between adventures I get lost in books, YouTube videos, podcasts, films, and anything else that fuels the imagination and inspires critical thinking.
        </p>
        <p className={styles.paragraph}>
          I'm also an enthusiastic software developer who loves building web applications with an approach rooted in a genuine thrill for writing code, even after a <Link className={styles.link} href="https://linkedin.com/in/acrossthekyle" target="_blank">career</Link> of 14 years.
        </p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.heading}>
          Connect
          <span className={styles.index}>03</span>
        </h2>
        <p className={styles.paragraph}>
          Sometimes I post stuff on <Link className={styles.link} href="https://instagram.com/acrossthekyle" target="_blank">instagram</Link>, but the best way to get in touch with me is <Link className={styles.link} href="mailto:hello@acrossthekyle.com">email</Link>.
        </p>
        <p className={styles.paragraph}>
          See you out there.
        </p>
      </section>
    </>
  );
}
