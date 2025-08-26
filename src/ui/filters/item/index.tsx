import styles from './stylesheet';

type Props = {
  children: React.ReactNode;
};

export default function FilterItem({ children }: Props) {
  return (
    <li className={styles.item}>
      {children}
    </li>
  );
}
