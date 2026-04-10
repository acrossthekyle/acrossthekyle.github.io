import Link from 'next/link';

import { Content } from '@/layout';

import styles from './stylesheet';

export default function View() {
  return (
    <Content>
      <div className={styles.definition} role="presentation">
        <span className="text-left">[ 1701.D/48632.4 ]</span>
        <span className="text-center">[ 031320030422 ]</span>
        <span className="text-right">[ Sierra-117 ]</span>
      </div>
      <h1 className={styles.header}>
        <span className={styles.blurb}>
          A self-taught software engineer and millennial who balances a lifelong passion for creating web apps with a love for long-distance backpacking adventures, and Star Trek.
        </span>
        <span className={styles.subheader}>
          Currently building web apps between adventures in Chicago
        </span>
      </h1>
      <section aria-label="footer" className={styles.tagline}>
        <p>Moving forward...</p>
        <nav>
          <ul className={styles.links}>
            <li>
              <Link className={styles.link} href="/info">Info</Link>
            </li>
            <span aria-hidden="true">//</span>
            <li>
              <Link className={styles.link} href="/trails">Trails</Link>
            </li>
            <span aria-hidden="true">//</span>
            <li>
              <Link className={styles.link} href="/thoughts">Thoughts</Link>
            </li>
            <span aria-hidden="true">//</span>
            <li>
              <Link className={styles.link} href="/albums">Albums</Link>
            </li>
          </ul>
        </nav>
        <p className={styles.last}>...with intent</p>
      </section>
    </Content>
  );
}
