import styles from './stylesheet';

export default function Main({ children }: React.PropsWithChildren) {
  return (
    <main className={styles.container}>
      <div className={styles.inner}>
        {children}
      </div>
    </main>
  );
}
