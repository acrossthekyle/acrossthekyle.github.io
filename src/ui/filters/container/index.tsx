import { useHierarchy } from '@/hooks/useHierarchy';

import styles from './stylesheet';

type Props = {
  children: React.ReactNode;
};

export default function FilterContainer({ children }: Props) {
  const { isOnChild } = useHierarchy();

  return (
    <section className={styles.container(isOnChild)}>
      <ul className={styles.items}>
        {children}
      </ul>
    </section>
  );
}
