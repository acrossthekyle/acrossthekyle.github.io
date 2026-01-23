import Link from 'next/link';

import { Layout } from '@/layout';

import styles from './stylesheet';

export default function View() {
  return (
    <Layout group="now">
      <header>
        <h1>
          <strong>
            Now
          </strong>
          <small>What's happening in my world</small>
        </h1>
        <p>
          This is my little corner to share what I'm up to and what I'm focused on right now. Just a snapshot of life as it's happening.
        </p>
      </header>
      <ul className={styles.list}>
        <li>
          Reading "The Dark Forest" by Liu Cixin, and "A Clash of Kings" by George R.R. Martin
        </li>
        <li>
          Daily 30-minute yoga videos with my partner
        </li>
        <li>
          Wrapped up a re-watch of Star Trek: Voyager
        </li>
        <li>
          Planning a trip to Peru
        </li>
      </ul>
      <p>
        <small>Last updated:<br /><em>January 18, 2026</em></small>
      </p>
      <p className={styles.footer}>
        <Link href="https://nownownow.com/about" target="_blank">
          <em>
            Visit nownownow.com to learn more about the now movement
          </em>
        </Link>
      </p>
    </Layout>
  );
}
