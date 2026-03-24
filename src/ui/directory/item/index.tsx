import styles from './stylesheet';

export default function Item({ children }: React.PropsWithChildren) {
  return (
    <li className={styles.container}>
      {children}
    </li>
  );
}
