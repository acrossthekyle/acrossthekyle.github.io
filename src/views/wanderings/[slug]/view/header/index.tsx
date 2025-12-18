import styles from './stylesheet';

type Props = {
  date?: string;
  location?: string;
  title: string[];
};

export default function Header({ date, location, title }: Props) {
  return (
    <h1 className={styles.header}>
      {title.map((word: string) => (
        <span className={styles.line} key={word}>
          {word}
        </span>
      ))}
      {location && date && (
        <span className="block mt-1 text-xs font-normal font-stretch-semi-condensed tracking-normal">
          {location} &ndash; {date}
        </span>
      )}
    </h1>
  );
}
