import { introduction } from '@/constants';
import { Image } from '@/ui/image';

import styles from './stylesheet';

export default function Hero() {
  return (
    <header className={styles.header}>
      <h1 className={styles.hero}>
        A backpacker and UI developer always seeking new ways to move forward intentfully.
      </h1>
      <section aria-label="Introduction to Kyle Gilbert" className={styles.introduction}>
        <p className={styles.blurb}>
          {introduction} I live on the lands belonging to the <span className={styles.emphasis}>Potawatomi</span>, <span className={styles.emphasis}>Ojibwe</span>, and <span className={styles.emphasis}>Odawa</span> &mdash; otherwise known as the city of <span className={styles.emphasis}>Chicago</span> &mdash; and I call hiking long-distance trails a vacation.
        </p>
        <Image
          alt="Picture of Kyle Gilbert"
          className={styles.image}
          height={540}
          sizes="50vw"
          src="8ed54501-bdcb-40b7-9387-f2fc306db83d.png"
          useSpinner
          width={960}
        />
      </section>
    </header>
  );
}
