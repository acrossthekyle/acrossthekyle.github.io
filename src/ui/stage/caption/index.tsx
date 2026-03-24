import styles from './stylesheet';

export default function Caption({ children }: React.PropsWithChildren) {
  return (
    <figcaption className={styles.caption}>
      {children}
    </figcaption>
  );
}
