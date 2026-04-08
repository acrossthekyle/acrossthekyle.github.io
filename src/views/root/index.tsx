import { Content } from '@/layout';

import styles from './stylesheet';

export default function View() {
  return (
    <Content>
      <h1 className={styles.heading}>
        Moving forward<br />intently
        <span className={styles.subheading}>An M.O.</span>
      </h1>
      <p className={styles.content}>
        <span>
          A self-taught software engineer and millennial who balances a lifelong passion for creating web apps with a love for long-distance backpacking adventures, and Star Trek.
        </span>
        <span className={styles.small}>
          <span className={styles.highlight}>building web apps</span> between adventures <span className={styles.highlight}>in Chicago</span>
        </span>
      </p>
    </Content>
  );
}
