import Image from './image';
import styles from './stylesheet';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.hero}>
        A thru-hiker and UI developer always seeking new ways to move forward intentfully.
      </h1>
      <section aria-label="About Kyle Gilbert" className={styles.introduction}>
        <p className={styles.blurb}>
          Hello, I'm Kyle Gilbert, and I'm a code tinkerer and thru-hiker who has spent the last {new Date().getFullYear() - 2012} years building parts of the web that you probably use today (with zero awards or recognitions), and the last {new Date().getFullYear() - 2018} years hiking around the world. I live on the lands belonging to the <span className={styles.emphasis}>Potawatomi</span>, <span className={styles.emphasis}>Ojibwe</span>, and <span className={styles.emphasis}>Odawa</span> &mdash; otherwise known as the city of <span className={styles.emphasis}>Chicago</span> &mdash; and I call hiking long-distance trails a vacation.
        </p>
        <Image />
      </section>
    </header>
  );
}
