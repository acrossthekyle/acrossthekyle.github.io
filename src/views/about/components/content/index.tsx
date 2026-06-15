import { PropsWithChildren } from 'react';

import { styles } from './stylesheet';

export default function Content({ children }: PropsWithChildren) {
  return (
    <section className={styles.container}>
      {children}
    </section>
  );
}
