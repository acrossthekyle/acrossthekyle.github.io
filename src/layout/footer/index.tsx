import { styles } from './stylesheet';
import Theme from './theme';

export default function Footer() {
  return (
    <footer>
      <div className={styles.scroll}>
        <span className={styles.wheel} />
      </div>
      <Theme />
    </footer>
  );
}
