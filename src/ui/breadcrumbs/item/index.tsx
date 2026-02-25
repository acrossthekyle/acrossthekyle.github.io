import styles from './stylesheet';

type Props = {
  children: React.ReactNode;
};

export default function Item({ children }: Props) {
  return (
    <li className={styles.container}>
      {children}
    </li>
  );
}
