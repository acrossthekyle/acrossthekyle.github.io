import { Content } from '@/layout';

import Clock from './clock';
import styles from './stylesheet';

export default function View() {
  return (
    <Content>
      <h1 className={styles.heading}>
        Moving forward<br />intently
        <span className={styles.subheading}>An M.O.</span>
      </h1>
      <p className={`${styles.content} ${styles.upper}`}>
        <span>
          A millennial <span className={styles.highlight}>drawn to</span> long <span className={styles.highlight}>trails</span> and wild places
        </span>
        <span>
          Currently <span className={styles.highlight}>building web apps</span> between adventures <span className={styles.highlight}>in Chicago</span>
        </span>
      </p>
      <p className={`${styles.content} ${styles.lower}`}>
        <span className={styles.location}>
          <span className={styles.line}>
            <span className={styles.highlight}>41.8832</span>° N, <span className={styles.highlight}>87.6324</span>° W
          </span>
          <span className={styles.line}>
            <span className={styles.highlight}>Sol</span>, Orion Spur, <span className={styles.highlight}>Milky Way</span>
          </span>
          <span className={styles.line}>
            CT <span className={styles.highlight}>-5 GMT</span>
          </span>
          <span className={styles.line}>
            <Clock />
          </span>
        </span>
        <span className={styles.code}>
          <span className={styles.line}>
            <span className={styles.highlight}>01001011</span> 01011001 01001100 01000101
          </span>
          <span className={styles.line}>
            4B <span className={styles.highlight}>59</span> 4C 45
          </span>
          <span className={styles.line}>
            75 89 <span className={styles.highlight}>76</span> 69
          </span>
          <span className={styles.line}>
            -.- -.-- .-.. <span className={styles.highlight}>.</span>
          </span>
        </span>
      </p>
    </Content>
  );
}
