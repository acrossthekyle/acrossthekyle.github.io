import styles from './stylesheet';

type Props = {
  index: string;
};

export default function Count({ index }: Props) {
  return (
    <span className={styles.index}>
      {index}
    </span>
  );
}
