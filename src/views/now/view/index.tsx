import Link from 'next/link';

import { Layout } from '@/layout';

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
      <ul className="list">
        <li>
          Reading "The Dark Forest" by Liu Cixin, and "A Clash of Kings" by George R.R. Martin
        </li>
        <li>
          Daily 30-minute yoga videos with my partner
        </li>
        <li>
          Started rewatching <em>Star Trek: Enterprise</em>
        </li>
        <li>
          Planning a trip to Peru
        </li>
      </ul>
      <section>
        <p>
          <small>Last updated:<br /><em>January 26th, 2026</em></small>
        </p>
        <Link href="https://nownownow.com/about" target="_blank">
          <em>
            Visit nownownow.com to learn more about the now movement
          </em>
        </Link>
      </section>
    </Layout>
  );
}
