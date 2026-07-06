import { styles } from './stylesheet';

export default function Header() {
  return (
    <header className={styles.container}>
      <h1 className={styles.header}>
        Hi, my name is <span className={styles.emphasis}>Kyle</span> <span className={styles.thin}>&mdash;</span> an inspired <span className={styles.emphasis}>backpacking </span> and <span className={styles.emphasis}>travel </span> enthusiast living a city-based life in <span className={styles.emphasis}>Chicago </span> crafting digital <span className={styles.emphasis}>experiences.</span>
      </h1>
      <p className={styles.introduction}>
        From the heights of the Himalayas in Nepal to the windswept expanses of Patagonia I'm always seeking the next adventure &mdash; even after hundreds of days and thousands of miles spent walking through forests, over mountains, and across entire countries.
      </p>
    </header>
  );
}
