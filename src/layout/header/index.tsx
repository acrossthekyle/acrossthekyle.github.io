import Link from 'next/link';

import styles from './stylesheet';

export default function Header() {
  return (
    <header className={styles.container}>
      <Link className={styles.anchor} href="/">
        KYL
        <span className={styles.definition}>
          /kī(ə)l/ • Gaelic • Channel or strait
        </span>
      </Link>
      <nav aria-label="primary navigation">
        <ul className={styles.items}>
          <li className={styles.item}>
            <Link className={styles.link} href="/info">
              <span className={styles.index}>[ 01 ]</span>
              Info
              <span className={styles.text}>About me</span>
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.link} href="/trails">
              <span className={styles.index}>[ 02 ]</span>
              Trails
              <span className={styles.text}>Hikes and summits</span>
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.link} href="/blog">
              <span className={styles.index}>[ 03 ]</span>
              Miniblog
              <span className={styles.text}>Quick thoughts</span>
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.link} href="/gallery">
              <span className={styles.index}>[ 04 ]</span>
              Gallery
              <span className={styles.text}>Photographic journal</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
