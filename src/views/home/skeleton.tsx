import styles from './stylesheet';

export default function Skeleton() {
  return (
    <div className={`${styles.view} ${styles.pulse}`}>
      {Array.from({ length: 13 }).map((_, index) => (
        <div className={styles.cell(true)} key={index}>
          <div className={styles.skeleton} />
        </div>
      ))}
    </div>
  );
}
