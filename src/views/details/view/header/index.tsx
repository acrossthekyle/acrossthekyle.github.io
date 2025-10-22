import styles from './stylesheet';

type Props = {
  date: string;
  stage: string;
  title: string;
};

export default function Header({ date, stage, title }: Props) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <span className={styles.lid}>
          {stage}.
        </span>
        {title}
        <span className={styles.time}>
          {date}
        </span>
      </h1>
    </header>
  );
}
