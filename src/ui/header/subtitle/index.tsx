import styles from './stylesheet';

export default function Subtitle({ children }: React.PropsWithChildren) {
  return (
    <span className={styles.container}>
      {children}
    </span>
  );
}
