import { Article } from '@/ui/article';

import styles from './stylesheet';

export default function Loading() {
  return (
    <Article>
      <h1 className={`${styles.header} ${styles.skeleton}`}>
        <span className={`${styles.hero} ${styles.short}`} />
        <span className={`${styles.hero} ${styles.long}`} />
      </h1>
      <p className={`${styles.highlight} ${styles.skeleton}`}>
        <span className={`${styles.sentence} ${styles.large}`} />
      </p>
      <p className={`${styles.highlight} ${styles.skeleton}`}>
        <span className={`${styles.sentence} ${styles.small}`} />
      </p>
      {Array.from({ length: 3 }).map((_, index) => (
        <p className={`${styles.paragraph} ${styles.skeleton}`} key={index}>
          <span className={`${styles.word} ${styles.small}`} />
          <span className={`${styles.word} ${styles.medium}`} />
          <span className={`${styles.word} ${styles.small}`} />
          <span className={`${styles.word} ${styles.tiny}`} />
          <span className={`${styles.word} ${styles.medium}`} />
          <span className={`${styles.word} ${styles.tiny}`} />
          <span className={`${styles.word} ${styles.small}`} />
          <span className={`${styles.word} ${styles.small}`} />
          <span className={`${styles.word} ${styles.tiny}`} />
          <span className={`${styles.word} ${styles.medium}`} />
          <span className={`${styles.word} ${styles.small}`} />
          <span className={`${styles.word} ${styles.tiny}`} />
        </p>
      ))}
      <ul className={`${styles.stages} ${styles.skeleton}`}>
        {Array.from({ length: 6 }).map((_, index) => (
          <li key={index}>
            <span className={styles.image} />
          </li>
        ))}
      </ul>
    </Article>
  );
}
