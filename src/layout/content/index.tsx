import styles from './stylesheet';

import Header from '../header';

export default function Content({ children }: React.PropsWithChildren) {
  return (
    <div className={styles.container}>
      <Header />
      {children}
    </div>
  );
}
