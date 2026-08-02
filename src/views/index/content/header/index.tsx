import { styles } from './stylesheet';

export default function Header() {
  return (
    <h2 className={styles.heading}>
      <span>Selected</span>
      <span>travels</span>
    </h2>
  );
}
