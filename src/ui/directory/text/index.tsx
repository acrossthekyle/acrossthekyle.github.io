import styles from './stylesheet';

type Props = {
  index: number;
  text: string[];
};

export default function DirectoryText({
  index,
  text,
}: Props) {
  return (
    <>
      {text.map((word, key: number) => (
        <span className={styles.block} key={word}>
          {word}
          {(key === text.length - 1) && (
            <span className={styles.index}>
              {String(index + 1).padStart(2, '0')}
            </span>
          )}
        </span>
      ))}
    </>
  );
}
