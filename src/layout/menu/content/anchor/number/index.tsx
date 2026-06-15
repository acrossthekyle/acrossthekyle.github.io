import { PropsWithChildren } from 'react';

import { styles } from './stylesheet';

export default function Number({ children }: PropsWithChildren) {
  return (
    <span className={styles.container}>
      {children}
    </span>
  );
}
