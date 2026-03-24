import styles from './stylesheet';

export default function Figure({ children }: React.PropsWithChildren) {
  return (
    <figure className={styles.figure}>
      {children}
    </figure>
  );
}
