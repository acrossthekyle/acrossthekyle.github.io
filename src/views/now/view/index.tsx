import { Layout } from '@/layout';

export default function View() {
  return (
    <Layout group="now">
      <article>
        <h2>
          Now
          <small>
            Presently doing
          </small>
        </h2>
        <p>
          This is my little corner to share what I'm up to and what I'm focused on right now.
        </p>
      </article>
      <section aria-label="what i'm currently doing">
        <ul className="list">
          <li>
            Reading "The Dark Forest" by Liu Cixin, and "A Clash of Kings" by George R.R. Martin
          </li>
          <li>
            Daily 30-minute yoga videos with my partner
          </li>
          <li>
            Started rewatching Star Trek: Enterprise
          </li>
          <li>
            Planning a trip to Peru
          </li>
        </ul>
      </section>
      <section>
        <h2>
          Last updated
          <small>January 26th, 2026</small>
        </h2>
      </section>
    </Layout>
  );
}
