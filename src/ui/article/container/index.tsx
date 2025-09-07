'use client';

import { useModel } from './model';
import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  onScrollEnd?: () => void;
};

export default function Article({ children, onScrollEnd }: Props) {
  const { handleArticleScroll, ref } = useModel(onScrollEnd);

  return (
    <article
      className={styles.container}
      onScroll={handleArticleScroll}
      ref={ref}
    >
      {children}
    </article>
  );
}
