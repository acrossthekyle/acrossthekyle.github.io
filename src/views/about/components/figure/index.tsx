import { PropsWithChildren } from 'react';

import { styles } from './stylesheet';

export default function Figure({ children }: PropsWithChildren) {
  return (
    <figure className={styles.container}>
      {children}
    </figure>
  );
}
