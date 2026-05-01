import type { Album } from '@/types';

import Anchor from './anchor';
import Controls from './controls';
import styles from './stylesheet';

type Props = {
  data: Album[];
};

export default function Header({ data }: Props) {
  return (
    <header className={styles.container}>
      <Anchor />
      <Controls data={data} />
    </header>
  );
}
