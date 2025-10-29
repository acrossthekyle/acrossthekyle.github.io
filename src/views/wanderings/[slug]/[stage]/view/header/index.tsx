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
        <span className={styles.eyebrow}>
          {stage}: {date}
        </span>
        {title}
      </h1>
    </header>
  );
}
