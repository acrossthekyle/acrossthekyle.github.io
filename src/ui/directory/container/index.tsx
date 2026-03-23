import Context from '@/contexts/hierarchy';

import styles from './stylesheet';

export default function Container({ children }: React.PropsWithChildren) {
  return (
    <Context>
      <nav aria-label="supplementary navigation" className={styles.container}>
        {children}
      </nav>
    </Context>
  );
}
