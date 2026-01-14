import Link from 'next/link';

import Theme from '@/ui/theme';

import styles from './stylesheet';

export default function View() {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>
          A Backpacker and Software Engineer making moves.
        </h1>
        <h2 className={styles.tagline}>
          Wandering is life, Coding is living.
        </h2>
        <Theme />
      </header>
      <main className={styles.main}>
        <article>
          <header>
            <h3 className={styles.paragraph}>
              Hey, I'm Kyle.
            </h3>
          </header>
          <section>
            <p className={styles.paragraph}>
              I live on the lands belonging to the <span className={styles.emphasis}>Potawatomi</span>, <span className={styles.emphasis}>Ojibwe</span>, and <span className={styles.emphasis}>Odawa</span> &mdash; otherwise known as the city of <span className={styles.emphasis}>Chicago</span> &mdash; and I've spent the past {new Date().getFullYear() - 2012} years building parts of the web that you probably use today, and the last {new Date().getFullYear() - 2018} years exploring the world.
            </p>
          </section>
          <footer>
            <Link
              className={styles.link}
              href="/wanderings"
              id="skip-to"
            >
              Wanderings
            </Link>
            <Link
              className={styles.link}
              href="/cv"
            >
              CV/Resume
            </Link>
          </footer>
        </article>
      </main>
      <footer className={styles.footer}>
        <p>
          See you out there.
        </p>
      </footer>
    </>
  );
}
