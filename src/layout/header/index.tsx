import { Waves } from 'lucide-react';

import View from './view';
import styles from './stylesheet';

type Props = {
  view: string;
};

export default function Header({ view }: Props) {
  return (
    <header className={styles.container}>
      <button className={styles.anchor} type="button">
        <Waves className={styles.icon} /> Kyle
      </button>
      <View current={view} />
    </header>
  );
}
