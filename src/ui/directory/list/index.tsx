import styles from './stylesheet';

export default function List({ children }: React.PropsWithChildren) {
  return (
    <ul className={styles.container}>
      {children}
    </ul>
  );
}
