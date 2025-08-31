import styles from './stylesheet';

type Props = {
  text: string[];
};

export default function DirectoryText({ text }: Props) {
  return (
    <>
      {text.map((word) => (
        <span className={styles.block} key={word}>
          {word}
        </span>
      ))}
    </>
  );
}
