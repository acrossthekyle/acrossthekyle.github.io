import { Content } from '@/layout';

import styles from './stylesheet';
import { calculateSunTimes } from './utils';

export default function View() {
  const sunTimes = calculateSunTimes();

  return (
    <Content>
      <h1 className={styles.heading}>
        Moving forward<br />intently
        <span className={styles.subheading}>An M.O.</span>
      </h1>
      <p className={styles.content}>
        <span>
          A self-taught software engineer and millennial who balances a lifelong passion for creating web apps with a love for long-distance backpacking adventures, and Star Trek
        </span>
        <span className={styles.small}>
          Building web apps between adventures in Chicago
        </span>
      </p>
      <aside className={styles.aside}>
        <ul className={styles.times}>
          <li>
            <span className={styles.index}>Sunrise</span>
            {sunTimes.sunrise}
          </li>
          <li>
            <span className={styles.index}>Sunset</span>
            {sunTimes.sunset}
          </li>
        </ul>
      </aside>
    </Content>
  );
}
