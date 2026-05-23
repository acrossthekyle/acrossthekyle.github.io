import Link from 'next/link';

import { Ui } from '@/ui';

import styles from './stylesheet';

export default function View() {
  return (
    <article className={styles.container}>
      <h1 className={styles.header}>
        Hi<br />
        I'm Kyle &mdash;<br />
        an inspired<br />
        backpacker<br />
        and travel<br />
        enthusiast<br />
        living a<br />
        city-based<br />
        life in<br />
        Chicago.<br />
      </h1>
      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.heading}>
            <span className={styles.index}>01</span>
            Backstory
          </h2>
          <p className={styles.paragraph}>
            My obsession with long-distance trails, alpine peaks, and a curiosity to explore first arose in the Andes mountains of S. America at an elevation of 10,611 feet as I stared up at the leading edge of a calving glacier during a vacation to Chile in 2016, and further cemented by a visit to the Torres del Paine national park in Patagonia a few days later.
          </p>
          <p className={styles.paragraph}>
            It was a mesmerizing experience that left an impression and which culminated in me embarking on my first long-distance backpacking adventure two years later as I walked 600 miles across Northern Spain on a route called The Camino De Santiago.
          </p>
          <p className={styles.paragraph}>
            Since then I've travelled to numerous destinations, and spent hundreds of days traipsing 1,932 miles through nature and over mountain passes across 5 continents and 10 countries.
          </p>
          <p className={styles.paragraph}>
            This website is a nearly complete catalog of those experiences.
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.heading}>
            <span className={styles.index}>02</span>
            Presently
          </h2>
          <p className={styles.paragraph}>
            Between adventures I get lost in books, YouTube videos, podcasts, films, and anything else that fuels the imagination and inspires critical thinking.
          </p>
          <p className={styles.paragraph}>
            I'm also an enthusiastic software developer who loves building web applications with an approach rooted in a genuine thrill for writing code, even after a career of 14 years.
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.heading}>
            <span className={styles.index}>03</span>
            Connect
          </h2>
          <p className={styles.paragraph}>
            Sometimes I post stuff on <Link className={styles.link} href="https://instagram.com/acrossthekyle" target="_blank">Instagram</Link>, but the best way to get in touch with me is <Link className={styles.link} href="mailto:hello@acrossthekyle.com">email</Link>.
          </p>
          <p className={styles.paragraph}>
            See you out there.
          </p>
        </section>
      </div>
      <figure className={styles.figure}>
        <Ui.Image
          className={styles.image}
          src="12a81235-f377-4a2c-ba0f-22fb36e8c399.jpeg"
        />
      </figure>
    </article>
  );
}
