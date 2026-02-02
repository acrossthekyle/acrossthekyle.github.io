import { Layout, Navigation } from '@/layout';

export default function View() {
  return (
    <Layout>
      <h2>
        <strong>Hi, I'm Kyle</strong>
        <small>Backpacker and engineer</small>
      </h2>
      <section aria-label="introduction">
        <p>
          I'm drawn to long trails and wild places, from the Himalayas to Patagonia. Between adventures, I build web apps in Chicago.
        </p>
      </section>
      <Navigation />
    </Layout>
  );
}
