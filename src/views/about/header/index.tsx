import { styles } from './stylesheet';

export default function Header() {
  return (
    <header>
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
      <p className={styles.paragraph}>
        My drive and inspiration for backpacking arose in the <span className={`${styles.emphasis} ${styles.strong}`}>Andes mountains of S. America</span> while exploring the Torres del Paine region of <span className={`${styles.emphasis} ${styles.strong}`}>Patagonia</span>.
      </p>
      <p className={styles.paragraph}>
        Thereafter I embarked on my debut long-distance backpacking adventure, walking a mere <span className={`${styles.emphasis} ${styles.strong}`}>600 miles</span> across Northern Spain via a route called <span className={`${styles.emphasis} ${styles.strong}`}>El Camino De Santiago</span>.
      </p>
      <p className={styles.paragraph}>
        Since then I've travelled to numerous destinations, spent hundreds of days <span className={`${styles.emphasis} ${styles.strong}`}>traipsing through nature</span> and over mountain passes all around the world, and reached the tops of the Rocky Mountains.
      </p>
      <p className={styles.paragraph}>
        This website is a <span className={`${styles.emphasis} ${styles.strong}`}>nearly complete</span> collection about me.
      </p>
    </header>
  );
}
