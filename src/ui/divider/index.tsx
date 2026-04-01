import styles from './stylesheet';

export default function Divider() {
  return (
    <div className={styles.divider} role="presentation">
      <div className={styles.upper} />
      <div className={styles.lower} />
    </div>
  );
}
