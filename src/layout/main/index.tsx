import styles from './stylesheet';

export default function Main({ children }: React.PropsWithChildren) {
  return (
    <main>
      <div
        className={`${styles.corners} ${styles.upper}`}
        role="presentation"
      >
        <div className={`${styles.corner} ${styles.left} ${styles.one}`} />
        <div className={`${styles.corner} ${styles.right} ${styles.two}`} />
      </div>
      {children}
      <div
        className={`${styles.corners} ${styles.lower}`}
        role="presentation"
      >
        <div className={`${styles.corner} ${styles.left} ${styles.three}`} />
        <div className={`${styles.corner} ${styles.right} ${styles.four}`} />
      </div>
    </main>
  );
}
