import Link from 'next/link';

import data from '@/db/config';
import { ExternalIcon } from '@/ui/link';

import Clock from './clock';
import Hierarchy from './hierarchy';
import Navigation from './nav';
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
        <section aria-label="copyright and settings items" className={styles.first}>
          <p>
            Continuously copyrighted <span className={styles.highlight}>since 2011</span>. All bits reserved.<br />
            <Link
              href="https://www.websitecarbon.com/website/acrossthekyle-com/"
              target="_blank"
            >
              <ExternalIcon>
                <span className={styles.highlight}>A+</span> Carbon <span className={styles.highlight}>rating</span>
              </ExternalIcon>
            </Link>
          </p>
          <div className={styles.settings}>
            <Units />
            <Theme current={theme} />
          </div>
        </section>
        <section aria-label="meta data/easter eggs, external site links" className={styles.second}>
          <div className={styles.meta}>
            <p>
              <span className={styles.highlight}>41.8832</span>° N, <span className={styles.highlight}>87.6324</span>° W
              <br />
              <span className={styles.highlight}>Sol</span>, Orion Spur, <span className={styles.highlight}>Milky Way</span>
              <br />
              CT <span className={styles.highlight}>-5 GMT</span>
              <br />
              <Clock />
            </p>
            <p className={styles.right}>
              <span className={styles.highlight}>01001011</span> 01011001 01001100 01000101
              <br />
              4B <span className={styles.highlight}>59</span> 4C 45
              <br />
              75 89 <span className={styles.highlight}>76</span> 69
              <br />
              -.- -.-- .-.. <span className={styles.highlight}>.</span>
            </p>
          </div>
          <nav aria-label="main navigation" className={styles.navigation}>
            <Navigation />
          </nav>
        </section>
      </div>
      <section className={styles.fixed}>
        <Link
          aria-label="acrossthekyle.com"
          className={styles.anchor}
          href="/"
        >
          KYL
        </Link>
        <p className={styles.compiled}>
          <span className={styles.highlight}>compiled</span> on <span className={styles.highlight}>{data.lastUpdated}</span>
        </p>
        <p>
          See you out there
        </p>
      </section>
    </footer>
  );
}
