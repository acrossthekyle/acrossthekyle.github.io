import styles from './stylesheet';
import Theme from './theme';

export default function Footer() {
  return (
    <footer className={styles.container}>
      <Theme />
      <p className={styles.notice}>
        A <span className={styles.strong}>collection</span> of words + images + code, copyright 2018 - {new Date().getFullYear()}
      </p>
    </footer>
  );
}
