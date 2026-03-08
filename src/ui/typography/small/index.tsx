import styles from './stylesheet';

export default function Small({ children }: React.PropsWithChildren) {
  return (
    <small className={styles.container}>
      {children}
    </small>
  );
}
