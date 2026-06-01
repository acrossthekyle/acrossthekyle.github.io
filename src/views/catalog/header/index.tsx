import styles from './stylesheet';

export default function Header() {
  return (
    <h1 className={styles.title}>
      <span className={styles.eyebrow}>
        Since 2018
      </span>
      <span className={styles.chunk}>&mdash;</span>
      <span className={styles.chunk}>Collections</span>
      <span className={styles.subtitle}>
        Currently viewing <u>everything</u> sorted <u>randomly</u>.
      </span>
    </h1>
  );
}
