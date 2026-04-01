import styles from './stylesheet';

export default function Highlight({ children }: React.PropsWithChildren) {
  return (
    <span className={styles.container}>
      {children}
    </span>
  );
}
