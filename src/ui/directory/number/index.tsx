import styles from './stylesheet';

type Props = {
  index: number;
};

export default function DirectoryNumber({ index }: Props) {
  return (
    <span className={styles.index}>
      {String(index + 1).padStart(2, '0')}.
    </span>
  );
}
