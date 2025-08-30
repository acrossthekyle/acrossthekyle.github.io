import styles from './stylesheet';

type Props = {
  lines: number;
};

export default function DirectoryLoading({ lines }: Props) {
  return (
    <span className={styles.pulse}>
      <span className={styles.eyebrow} />
      <span className={`${styles.text} ${styles.short}`} />
      {lines === 2 && (
        <span className={`${styles.text} ${styles.long}`} />
      )}
    </span>
  );
}
