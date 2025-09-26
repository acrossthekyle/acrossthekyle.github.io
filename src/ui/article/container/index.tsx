'use client';

import { useModel } from './model';
import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  onScrollEnd?: () => void;
};

export default function Article({ children, className, onScrollEnd }: Props) {
  const { handleArticleScroll, ref } = useModel(onScrollEnd);

  return (
    <article
      className={`${styles.container} ${className}`.trim()}
      onScroll={handleArticleScroll}
      ref={ref}
    >
      {children}
    </article>
  );
}
