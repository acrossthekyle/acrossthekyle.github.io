import styles from './stylesheet';

type Props = {
  date: string;
  location: string;
  type: string;
};

export default function Info({ date, location, type }: Props) {
  return (
    <ul className={styles.list}>
      <li>
        <span className={styles.label}>What</span>
        {type}
      </li>
      <li>
        <span className={styles.label}>Where</span>
        {location}
      </li>
      <li>
        <span className={styles.label}>When</span>
        {date}
      </li>
    </ul>
  );
}
