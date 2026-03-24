import styles from './stylesheet';

export default function Eyebrow({ children }: React.PropsWithChildren) {
  return (
    <span className={styles.eyebrow}>
      {children}
    </span>
  );
}
