import { Article } from '@/ui/article';

import Toggle from '../toggle';

import styles from './stylesheet';

type Props = {
  slug: string;
};

export default function Loading({ slug }: Props) {
  return (
    <dialog className={styles.container} open>
      <Article>
        <Toggle slug={slug} />
        <div className={`${styles.stats} ${styles.skeleton}`}>
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index}>
              <span className={`${styles.word} ${styles.small}`} />
              <span className={`${styles.word} ${styles.tiny}`} />
            </div>
          ))}
        </div>
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
