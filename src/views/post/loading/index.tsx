import { Article } from '@/ui/article';

import styles from './stylesheet';

export default function Loading() {
  return (
    <Article className={styles.container}>
      <h1 className={`${styles.header} ${styles.skeleton}`}>
        <span className={`${styles.hero} ${styles.short}`} />
        <span className={`${styles.hero} ${styles.long}`} />
      </h1>
      {Array.from({ length: 5 }).map((_, index) => (
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
    </Article>
  );
}
