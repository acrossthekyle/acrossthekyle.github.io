import styles from './stylesheet';

export default function Loading() {
  return (
    <>
      <div aria-hidden="true" className={`${styles.skeleton} ${styles.header}`}>
        <span className={`${styles.hero} ${styles.small}`} />
        <span className={`${styles.hero} ${styles.medium}`} />
        <span className={`${styles.hero} ${styles.small}`} />
        <span className={`${styles.hero} ${styles.large}`} />
        <span className={`${styles.hero} ${styles.medium}`} />
        <span className={`${styles.hero} ${styles.medium}`} />
        <span className={`${styles.hero} ${styles.small}`} />
        <span className={`${styles.hero} ${styles.small}`} />
        <span className={`${styles.hero} ${styles.small}`} />
        <span className={`${styles.hero} ${styles.large}`} />
        <span className={`${styles.hero} ${styles.medium}`} />
        <span className={`${styles.hero} ${styles.medium}`} />
        <span className={`${styles.hero} ${styles.medium}`} />
        <span className={`${styles.hero} ${styles.small}`} />
      </div>
      <div aria-hidden="true" className={styles.skeleton}>
        <span className={`${styles.word} ${styles.small}`} />
        <span className={`${styles.word} ${styles.medium}`} />
        <span className={`${styles.word} ${styles.large}`} />
        <span className={`${styles.word} ${styles.medium}`} />
        <span className={`${styles.word} ${styles.medium}`} />
        <span className={`${styles.word} ${styles.small}`} />
        <span className={`${styles.word} ${styles.small}`} />
        <span className={`${styles.word} ${styles.small}`} />
        <span className={`${styles.word} ${styles.large}`} />
        <span className={`${styles.word} ${styles.medium}`} />
        <span className={`${styles.word} ${styles.medium}`} />
        <span className={`${styles.word} ${styles.small}`} />
        <span className={`${styles.word} ${styles.medium}`} />
      </div>
    </>
  );
}
