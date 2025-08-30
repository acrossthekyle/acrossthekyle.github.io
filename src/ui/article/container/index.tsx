'use client';

import { useModel } from './model';
import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  isFull?: boolean;
  onScrollEnd?: () => void;
};

export default function Article({ children, isFull, onScrollEnd }: Props) {
  const { handleOnScroll, ref } = useModel(onScrollEnd);

  return (
    <article
      className={styles.container(isFull)}
      onScroll={handleOnScroll}
      ref={ref}
    >
      {children}
    </article>
  );
}
