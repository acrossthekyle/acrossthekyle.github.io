import { Article } from '@/ui/article';

import styles from './stylesheet';

export default function Fallback() {
  return (
    <dialog className={styles.container} open>
      <Article>
        <div className={`${styles.hero} ${styles.skeleton}`}>
          <div className={`${styles.word} ${styles.tiny}`} />
          <div className={`${styles.word} ${styles.short} ${styles.tall}`} />
          <div className={`${styles.word} ${styles.small}`} />
        </div>
        <div className={`${styles.stats} ${styles.skeleton}`}>
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index}>
              <span className={`${styles.word} ${styles.small}`} />
              <span className={`${styles.word} ${styles.tiny}`} />
            </div>
          ))}
        </div>
        <div className={`${styles.word} ${styles.tiny} ${styles.skeleton}`} />
        <div className={`${styles.rectangle} ${styles.skeleton}`} />
        <div className={`${styles.word} ${styles.tiny} ${styles.skeleton}`} />
        <div className={`${styles.rectangle} ${styles.skeleton}`} />
        <div className={`${styles.word} ${styles.small} ${styles.skeleton}`} />
        {Array.from({ length: 7 }).map((_, index) => (
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
    </dialog>
  );
}
