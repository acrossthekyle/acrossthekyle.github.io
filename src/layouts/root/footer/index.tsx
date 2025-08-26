import styles from './stylesheet';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.copy}>
        &copy; 1987 - {new Date().getFullYear()}
      </span>
    </footer>
  );
}
