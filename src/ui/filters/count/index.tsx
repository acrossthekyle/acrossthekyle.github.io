import styles from './stylesheet';

type Props = {
  value: number | string;
};

export default function FilterCount({ value }: Props) {
  return (
    <span className={styles.count}>
      ({String(value).padStart(2, '0')})
    </span>
  );
}
