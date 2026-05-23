import Anchor from './anchor';
import styles from './stylesheet';

export default function Header() {
  return (
    <header className={styles.container}>
      <Anchor />
      <p className={styles.tagline}>
        A collection of hikes, summits, and experiences
      </p>
    </header>
  );
}
