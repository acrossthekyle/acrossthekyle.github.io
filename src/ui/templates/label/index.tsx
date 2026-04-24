import styles from './stylesheet';

export default function Label({ children }: React.PropsWithChildren) {
  return (
    <span className={styles.container}>{children}</span>
  );
}
