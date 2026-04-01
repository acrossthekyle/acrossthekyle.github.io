import styles from './stylesheet';

export default function Eyebrow({ children }: React.PropsWithChildren) {
  return (
    <span className={styles.container}>
      {children}
    </span>
  );
}
