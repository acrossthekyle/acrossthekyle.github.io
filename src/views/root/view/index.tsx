import { Layout, Navigation } from '@/layout';

export default function View() {
  return (
    <Layout isRoot>
      <h1>
        <strong>Hi, I'm Kyle</strong>
        <small>Backpacker and engineer</small>
      </h1>
      <p>
        I'm drawn to long trails and wild places, from the Himalayas to Patagonia. Between adventures, I build web apps in Chicago.
      </p>
      <Navigation />
    </Layout>
  );
}
