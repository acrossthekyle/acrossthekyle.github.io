import Context from '@/contexts/hierarchy';

import Anchor from './anchor';
import styles from './stylesheet';

export default function Header() {
  return (
    <Context>
      <header className={styles.container}>
        <nav>
          <ul>
            <li>
              <Anchor path="/info">
                Info
              </Anchor>
            </li>
            <li>
              <Anchor path="/trails">
                Trails
              </Anchor>
            </li>
            <li>
              <Anchor path="/summits">
                Summits
              </Anchor>
            </li>
            <li>
              <Anchor path="/destinations">
                Destinations
              </Anchor>
            </li>
          </ul>
        </nav>
      </header>
    </Context>
  );
}
