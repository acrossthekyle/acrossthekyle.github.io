import { Layout, Navigation } from '@/layout';

import styles from './stylesheet';

export default function View() {
  return (
    <Layout isRoot>
      <span className={styles.slash} role="presentation">/</span>
      <h1>
        <strong>Hi, I'm Kyle</strong>
        <small>
          /kī(ə)l/ • Gaelic • Mid 16th century • Channel, sound, or strait
        </small>
      </h1>
      <p>
        I'm drawn to long trails and wild places, from the Himalayas to Patagonia. Between adventures, I build web apps in Chicago.
      </p>
      <Navigation />
    </Layout>
  );
}
