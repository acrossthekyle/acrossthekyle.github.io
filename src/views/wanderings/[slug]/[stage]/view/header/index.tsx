import styles from './stylesheet';

type Props = {
  date: string;
  title: string;
};

export default function Header({ date, title }: Props) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <span className={styles.eyebrow}>
          {date}
        </span>
        {title}
      </h1>
    </header>
  );
}
