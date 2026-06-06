import styles from './stylesheet';

export default function Header() {
  return (
    <h1 className={styles.title}>
      <span className={styles.eyebrow}>
        Since 2018
      </span>
      <span className={styles.chunk}>&mdash;</span>
      <span className={styles.words}>Wanderings</span>
      <span className={styles.subtitle}>
        A collection of thru-hikes, summits, destinations, and other experiences
      </span>
    </h1>
  );
}
