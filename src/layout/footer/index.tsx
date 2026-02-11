import Search from './search';
import styles from './stylesheet';
import Theme from './theme';

export default function Footer() {
  return (
    <footer className={styles.container}>
      <Search />
      <Theme />
    </footer>
  );
}
