import styles from './stylesheet';

type Props = {
  index?: number;
  words: string[];
};

export default function DirectoryText({ index, words }: Props) {
  return (
    <>
      {words.map((word, iteration) => (
        <span className={styles.block} key={word}>
          {word}
          {iteration === (words.length - 1) && index !== undefined && (
            <span className={styles.index}>
              {String(index + 1).padStart(2, '0')}
            </span>
          )}
        </span>
      ))}
    </>
  );
}
