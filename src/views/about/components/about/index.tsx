import { PropsWithChildren } from 'react';

import { styles } from './stylesheet';

export default function About({ children }: PropsWithChildren) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}
