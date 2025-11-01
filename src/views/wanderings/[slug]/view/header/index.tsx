import styles from './stylesheet';

type Props = {
  date?: string;
  location?: string;
  title: string[];
  type?: string;
};

export default function Header({
  date = '',
  location = '',
  title,
  type = '',
}: Props) {
  return (
    <h1 className={styles.header}>
      {title.map((word: string) => (
        <span className={styles.line} key={word}>
          {word}
        </span>
      ))}
      <span className={styles.info}>
        <span className={styles.type}>{type}</span>
        <span className={styles.location}>{location}</span>
        <span className={styles.date}>{date}</span>
      </span>
    </h1>
  );
}
