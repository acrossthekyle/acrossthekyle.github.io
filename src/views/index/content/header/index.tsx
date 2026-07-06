import { styles } from './stylesheet';

export default function Header() {
  return (
    <>
      <h2 className={styles.heading}>
        <span>Selected</span>
        <span>travels</span>
      </h2>
      <p className={styles.years}>
        <span>'18</span>
        <span className={styles.bar} />
        <span>'{String(new Date().getFullYear()).replace('20', '')}</span>
      </p>
    </>
  );
}
