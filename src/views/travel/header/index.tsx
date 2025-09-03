import styles from './stylesheet';

type Props = {
  title: string[];
};

export default function Header({ title }: Props) {
  return (
    <h1 className={styles.title}>
      {title.map((word: string) => (
        <span className={styles.block} key={word}>
          {word}
        </span>
      ))}
    </h1>
  );
}
