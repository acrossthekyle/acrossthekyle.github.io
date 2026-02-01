import { Layout, Navigation } from '@/layout';

export default function View() {
  return (
    <Layout group="home">
      <section>
        <h2>
          Hi, I'm Kyle
        </h2>
        <p>
          I'm drawn to long trails and wild places, from the Himalayas to Patagonia. Between adventures, I build web apps in Chicago.
        </p>
      </section>
      <Navigation />
    </Layout>
  );
}
