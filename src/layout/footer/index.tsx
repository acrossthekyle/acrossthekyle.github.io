import Link from 'next/link';

import data from '@/db/config';

import Clock from './clock';
import Hierarchy from './hierarchy';
import Jump from './jump';
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
          <p className={styles.links}>
            <Hierarchy />
          </p>
          <Clock />
          <div className={styles.settings}>
            <Units />
            <Theme current={theme} />
            <Jump />
          </div>
        </section>
        <section aria-label="meta data/easter eggs, external site links" className={styles.second}>
          <div className={styles.meta}>
            <p className={styles.highlight}>
              41.8781° N, 87.6298° W<br />
              Sol, Orion Spur, Milky Way
            </p>
            <p className={styles.right}>
              01001110 01000011 01000011 0x6A5 13<br />
              115 112 97 114 116 97 110 32 49 49 55
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
          Compiled on<br />{data.lastUpdated}
        </p>
        <p className={styles.tagline}>
          See you<br />
          out there
        </p>
      </section>
    </footer>
  );
}
