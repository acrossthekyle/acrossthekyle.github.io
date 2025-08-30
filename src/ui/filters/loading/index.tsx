import styles from './stylesheet';

type Props = {
  size: 'small' | 'medium' | 'large';
};

export default function FiltersLoading({ size }: Props) {
  return (
    <span className={styles.pulse}>
      <span className={`${styles.text} ${styles[size]}`} />
      <span className={styles.count} />
    </span>
  );
}
