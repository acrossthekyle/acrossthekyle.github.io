import { PropsWithChildren } from 'react';

import styles from './stylesheet';

export default function Article({ children }: PropsWithChildren) {
  return (
    <article className={styles.container}>
      {children}
    </article>
  );
}
