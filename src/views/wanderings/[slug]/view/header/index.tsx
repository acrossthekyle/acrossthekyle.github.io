import styles from './stylesheet';

type Props = {
  location: string;
  title: string[];
};

export default function Header({ location, title }: Props) {
  return (
    <h1 className={styles.header}>
      {title.map((word: string) => (
        <span className={styles.line} key={word}>
          {word}
        </span>
      ))}
      <span className={styles.location}>{location}</span>
    </h1>
  );
}
