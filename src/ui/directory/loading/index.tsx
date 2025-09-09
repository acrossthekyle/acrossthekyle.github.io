import styles from './stylesheet';

type Props = {
  lines: number;
};

export default function DirectoryLoading({ lines }: Props) {
  return (
    <li className={styles.container}>
      <span className={styles.pulse}>
        <span className={`${styles.text} ${styles.short}`} />
        {lines === 2 && (
          <span className={`${styles.text} ${styles.long}`} />
        )}
      </span>
    </li>
  );
}
