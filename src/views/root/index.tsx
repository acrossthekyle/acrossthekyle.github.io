import { Highlight } from '@/ui/typography';

import Clock from './clock';
import styles from './stylesheet';

export default function View() {
  return (
    <>
      <h1 className={styles.heading}>
        Moving forward<br />intently
        <span className={styles.subheading}>An M.O.</span>
      </h1>
      <p className={`${styles.content} ${styles.upper}`}>
        <span>
          A millennial <Highlight>drawn to</Highlight> long <Highlight>trails</Highlight> and wild places
        </span>
        <span>
          Currently <Highlight>building web apps</Highlight> between adventures <Highlight>in Chicago</Highlight>
        </span>
      </p>
      <p className={`${styles.content} ${styles.lower}`}>
        <span className={styles.location}>
          <span className={styles.line}>
            <Highlight>41.8832</Highlight>° N, <Highlight>87.6324</Highlight>° W
          </span>
          <span className={styles.line}>
            <Highlight>Sol</Highlight>, Orion Spur, <Highlight>Milky Way</Highlight>
          </span>
          <span className={styles.line}>
            CT <Highlight>-5 GMT</Highlight>
          </span>
          <span className={styles.line}>
            <Clock />
          </span>
        </span>
        <span className={styles.code}>
          <span className={styles.line}>
            <Highlight>01001011</Highlight> 01011001 01001100 01000101
          </span>
          <span className={styles.line}>
            4B <Highlight>59</Highlight> 4C 45
          </span>
          <span className={styles.line}>
            75 89 <Highlight>76</Highlight> 69
          </span>
          <span className={styles.line}>
            -.- -.-- .-.. <Highlight>.</Highlight>
          </span>
        </span>
      </p>
    </>
  );
}
