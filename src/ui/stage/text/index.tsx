import styles from './stylesheet';

export default function Text({ children }: React.PropsWithChildren) {
  return (
    <span className={styles.text}>
      {children}
    </span>
  );
}
