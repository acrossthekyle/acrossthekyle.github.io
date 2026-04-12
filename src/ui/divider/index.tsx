import styles from './stylesheet';

export default function Divider() {
  return (
    <div className={styles.divider} role="presentation">
      <div className={styles.corners}>
        <div className={`${styles.corner} ${styles.left} ${styles.three}`} />
        <div className={`${styles.corner} ${styles.right} ${styles.four}`} />
      </div>
      <div className={`${styles.corners} ${styles.border}`}>
        <div className={`${styles.corner} ${styles.left} ${styles.one}`} />
        <div className={`${styles.corner} ${styles.right} ${styles.two}`} />
      </div>
    </div>
  );
}
