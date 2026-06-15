import { styles } from './stylesheet';

export default function Header() {
  return (
    <>
      <h1 className={styles.title}>
        <span className="flex flex-col gap-2">
          <span className={styles.heavy}>
            Archives
          </span>
          <span className={styles.light}>
            &mdash; An index of curated collections [2016 - {new Date().getFullYear()}]
          </span>
        </span>
      </h1>
      <span className={styles.updated}>
        Last updated: Jun 11 2026
      </span>
      {/*<div className={styles.footer}>
        <nav aria-label="filters">
          <ul className={styles.list}>
            <li>
              <button className={styles.filter} type="button">
                All
              </button>
            </li>
            <li>
              <button className={styles.filter} type="button">
                Thru-hikes
              </button>
            </li>
            <li>
              <button className={styles.filter} type="button">
                Summits
              </button>
            </li>
            <li>
              <button className={styles.filter} type="button">
                Basecamps
              </button>
            </li>
            <li>
              <button className={styles.filter} type="button">
                Destinations
              </button>
            </li>
          </ul>
        </nav>
      </div>*/}
    </>
  );
}
