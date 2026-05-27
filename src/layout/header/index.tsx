import Anchor from './anchor';
import styles from './stylesheet';

export default function Header() {
  return (
    <header className={styles.container}>
      <Anchor />
      <p className={styles.tagline}>
        A <span className={styles.strong}>catalog</span> of hikes, summits, and experiences
      </p>
    </header>
  );
}
