import Link from 'next/link';

import data from '@/db/config';
import { ExternalIcon } from '@/ui/link';

import Hierarchy from './hierarchy';
import styles from './stylesheet';
import Theme from './theme';
import Units from './units';

export default function Footer() {
  return (
    <footer className={styles.container}>
      <nav aria-label="supplementary navigation" className={styles.navigation}>
        <ul className={styles.items}>
          <li className={styles.item}>
            <Link
              className={styles.link}
              href="https://instagram.com/acrossthekyle"
              target="_blank"
            >
              <ExternalIcon>Instagram</ExternalIcon>
              <span className={styles.text}>@acrossthekyle</span>
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              className={styles.link}
              href="https://linkedin.com/in/acrossthekyle"
              target="_blank"
            >
              <ExternalIcon>LinkedIn</ExternalIcon>
              <span className={styles.text}>u/acrossthekyle</span>
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              className={styles.link}
              href="mailto:hello@acrossthekyle.com"
              target="_blank"
            >
              <ExternalIcon>Email</ExternalIcon>
              <span className={styles.text}>hello@acrossthekyle</span>
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              className={styles.link}
              href="https://github.com/acrossthekyle"
              target="_blank"
            >
              <ExternalIcon>GitHub</ExternalIcon>
              <span className={styles.text}>/acrossthekyle</span>
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              className={styles.link}
              href="https://www.websitecarbon.com/website/acrossthekyle-com/"
              target="_blank"
            >
              <ExternalIcon>Carbon</ExternalIcon>
              <span className={styles.text}>A+ RATING</span>
            </Link>
          </li>
          <li className={styles.item}>
            <Theme />
          </li>
          <li className={styles.item}>
            <Units />
          </li>
        </ul>
        <Hierarchy />
      </nav>
      <p className={styles.copyright}>
        Continuously copyrighted <span className={styles.highlight}>since 2011</span><br />
        Recently <span className={styles.highlight}>compiled on {data.lastUpdated}</span><br />
        All bits reserved
      </p>
    </footer>
  );
}
