import { PropsWithChildren } from 'react';

import { styles } from './stylesheet';

export default function Header({ children }: PropsWithChildren) {
  return (
    <header className={styles.container}>
      {children}
    </header>
  );
}
