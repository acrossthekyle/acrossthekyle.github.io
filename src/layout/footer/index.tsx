import data from '@/db/config';

import Fixed from './fixed';
import Meta from './meta';
import Socials from './socials';
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
        <div className={styles.upper}>
          <div />
          <span className={`${styles.copyright} ${styles.center}`}>
            Compiled on {data.lastUpdated}. Continously copyrighted since 2011. All bits reserved.
          </span>
          <span className={styles.settings}>
            <Units />
            <Theme current={theme} />
          </span>
        </div>

        <div>
          <Meta />
          <Socials />
        </div>
      </div>

      <Fixed />
    </footer>
  );
}
