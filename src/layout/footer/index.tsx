import Link from 'next/link';

import data from '@/db/config';
import { ExternalIcon } from '@/ui/link';

import Hierarchy from './hierarchy';
import styles from './stylesheet';
import Theme from './theme';
import Units from './units';

type Props = {
  theme: string;
};

export default function Footer({ theme }: Props) {
  return (
    <footer className={styles.container} role="contentinfo">
      <div className={styles.inner}>
        <Hierarchy />
        <p className={styles.copyright}>
          Recently <span className={styles.highlight}>compiled</span> on <span className={styles.highlight}>{data.lastUpdated}</span>
        </p>
        <nav aria-label="main navigation" className={styles.navigation}>
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
              <Theme current={theme} />
            </li>
            <li className={styles.item}>
              <Units />
            </li>
          </ul>
        </nav>
      </div>
      <section className={styles.fixed}>
        <Link
          aria-label="acrossthekyle.com"
          className={styles.anchor}
          href="/"
        >
          KYL
        </Link>
        <p className={styles.copyright}>
          Recently <span className={styles.highlight}>compiled</span> on <span className={styles.highlight}>{data.lastUpdated}</span>
        </p>
        <p>
          See you out there
        </p>
      </section>
    </footer>
  );
}
