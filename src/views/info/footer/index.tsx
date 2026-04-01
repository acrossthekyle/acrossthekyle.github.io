import Link from 'next/link';

import styles from './stylesheet';

export default function Footer() {
  return (
    <section className={styles.container}>
      <h2 className={styles.header}>
        <span className={styles.index}>[ 01-x ]</span>
        Extras
        <span className={styles.text}>
          More random tidbits of information about me and this website
        </span>
      </h2>
      <ul className={styles.items}>
        <li className={styles.item}>
          <Link className={styles.link} href="/info/books">
            <span className={styles.index}>[ 01-x01 ]</span>
            Books
            <span className={styles.list}>
              Fiction<br />
              Science Fiction<br />
              Non-Fiction
            </span>
            <span className={styles.footer}>What I've read</span>
          </Link>
        </li>
        <li className={styles.item}>
          <Link className={styles.link} href="/info/gear">
            <span className={styles.index}>[ 01-x02 ]</span>
            Gear
            <span className={styles.list}>
              Thru-hikes<br />
              Overnight hikes<br />
              Summits
            </span>
            <span className={styles.footer}>What I carry on hikes</span>
          </Link>
        </li>
        <li className={styles.item}>
          <Link className={styles.link} href="/info/colphon">
            <span className={styles.index}>[ 01-x03 ]</span>
            Colophon
            <span className={styles.list}>
              Frameworks<br />
              Tools<br />
              Inspiration
            </span>
            <span className={styles.footer}>How it's made</span>
          </Link>
        </li>
      </ul>
    </section>
  );
}
