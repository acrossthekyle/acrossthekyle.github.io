import styles from './stylesheet';

export default function Container({ children }: React.PropsWithChildren) {
  return (
    <h1 className={styles.container}>
      {children}
    </h1>
  );
}
