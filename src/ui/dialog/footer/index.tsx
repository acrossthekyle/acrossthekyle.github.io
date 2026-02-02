import styles from './stylesheet';

export default function Footer() {
  return (
    <section className={styles.footer}>
      Press <kbd className={styles.kbd}>Esc</kbd> to close
    </section>
  );
}
