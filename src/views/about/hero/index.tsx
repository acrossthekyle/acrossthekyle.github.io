import {
  Image,
  ImageOptions,
  ImagePlaceholder,
  ImageSkeleton,
} from '@/ui/image';

import styles from './stylesheet';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.hero}>
        A thru-hiker and UI developer always seeking new ways to move forward intentfully.
      </h1>
      <section aria-label="Introduction to Kyle Gilbert" className={styles.introduction}>
        <p className={styles.blurb}>
          Hello, I'm Kyle Gilbert, and I'm a code tinkerer and thru-hiker who has spent the last {new Date().getFullYear() - 2012} years building parts of the web that you probably use today (with zero awards or recognitions), and the last {new Date().getFullYear() - 2018} years hiking around the world. I live on the lands belonging to the <span className={styles.emphasis}>Potawatomi</span>, <span className={styles.emphasis}>Ojibwe</span>, and <span className={styles.emphasis}>Odawa</span> &mdash; otherwise known as the city of <span className={styles.emphasis}>Chicago</span> &mdash; and I call hiking long-distance trails a vacation.
        </p>
        <Image src="8ed54501-bdcb-40b7-9387-f2fc306db83d.png">
          <ImagePlaceholder className={styles.skeleton}>
            <ImageOptions
              alt="Picture of Kyle Gilbert"
              className={styles.image}
              height={540}
              sizes="50vw"
              width={960}
            />
            <ImageSkeleton />
          </ImagePlaceholder>
        </Image>
      </section>
    </header>
  );
}
