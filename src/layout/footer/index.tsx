import styles from './stylesheet';
import Theme from './theme';

export default function Footer() {
  return (
    <footer className={styles.container}>
      <Theme />
      <p className={styles.notice}>Words + images + code © since 2011</p>
    </footer>
  );
}
