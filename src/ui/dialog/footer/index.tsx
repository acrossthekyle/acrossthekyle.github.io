import styles from './stylesheet';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      Press <kbd className={styles.kbd}>Esc</kbd> to close
    </footer>
  );
}
