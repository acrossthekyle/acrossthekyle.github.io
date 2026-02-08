import styles from './stylesheet';

export default function Line() {
  return (
    <div className={styles.container} role="presentation">
      <div className={styles.dot} />
    </div>
  );
}
