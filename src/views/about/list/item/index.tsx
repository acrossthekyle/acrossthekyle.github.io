import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export default function Item({ children }: Props) {
  return (
    <li className={styles.item}>
      {children}
    </li>
  );
}
