import styles from './stylesheet';

export default function Prefix({ children }: React.PropsWithChildren) {
  return (
    <span className={styles.container}>
      {children}
    </span>
  );
}
