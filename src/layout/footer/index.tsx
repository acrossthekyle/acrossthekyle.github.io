import Search from './search';
import Shortcuts from './shortcuts';
import styles from './stylesheet';
import Theme from './theme';

export default function Footer() {
  return (
    <footer className={styles.container}>
      <Search />
      <Theme />
      <Shortcuts />
    </footer>
  );
}
