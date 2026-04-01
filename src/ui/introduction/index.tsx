import styles from './stylesheet';

export default function Introduction({ children }: React.PropsWithChildren) {
  return (
    <p className={styles.container}>
      {children}
    </p>
  );
}
