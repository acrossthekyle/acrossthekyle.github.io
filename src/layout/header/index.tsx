import type { Collection } from '@/types';

import Controls from './controls';
import styles from './stylesheet';

type Props = {
  collections: Collection[];
};

export default function Header({ collections }: Props) {
  return (
    <header className={styles.container}>
      <Controls collections={collections} />
    </header>
  );
}
