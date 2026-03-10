import { Layout, Navigation } from '@/layout';
import { Heading, Small, Strong } from '@/ui/typography';

import styles from './stylesheet';

export default function View() {
  return (
    <Layout isRoot>
      <span className={styles.slash} role="presentation">/</span>
      <Heading>
        <Strong>Hi, I'm Kyle</Strong>
        <Small>
          /kī(ə)l/ • Gaelic • Mid 16th century • Channel, sound, or strait
        </Small>
      </Heading>
      <p>
        A millennial drawn to long trails and wild places, from the Himalayas to Patagonia. Between adventures, I build web apps in Chicago.
      </p>
      <Navigation />
    </Layout>
  );
}
