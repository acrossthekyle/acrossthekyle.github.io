import Image from 'next/image';

import styles from './stylesheet';
import World from './world';

export default function Content() {
  return (
    <section className={styles.header}>
      <header>
        <figure className={styles.figure}>
          <div className={styles.circle}>
            <Image
              alt="Kyle Gilbert"
              className={styles.image}
              height={432}
              sizes="25vw"
              src="e2b569ce-5d9f-48bb-a456-8f904e109c8e.jpeg?updatedAt=1744299019863"
              width={768}
            />
          </div>
          <figcaption className={styles.caption}>
            <h2 className={styles.name}>Kyle Gilbert</h2>
            <h3 className={styles.location}>Chicago, IL</h3>
            <h4 className={styles.job}>
              Backpacker &mdash; Web Developer
            </h4>
          </figcaption>
        </figure>
      </header>
      <div className={styles.world}>
        <World />
      </div>
      <p className={styles.introduction}>
        Hey, my name's Kyle and I've been kicking it since 1987 as a backpacker / web developer who has thru-hiked several trails across the globe from the rugged paths of Corsica to the towering peaks of Nepal while based in Chicago with my partner and our dog Dax.
      </p>
    </section>
  );
}
