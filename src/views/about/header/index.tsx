import { styles } from './stylesheet';

export default function Header() {
  return (
    <h1 className={styles.title}>
      <span>Hi!</span>
      <span>I'm <span className={styles.emphasis}>Kyle</span> &mdash;</span>
      <span>an inspired</span>
      <span className={styles.emphasis}>backpacker</span>
      <span>and travel</span>
      <span>enthusiast</span>
      <span>living a</span>
      <span>city-based</span>
      <span>life in</span>
      <span className={styles.emphasis}>Chicago.</span>
    </h1>
  );
}
