import { MoveRight } from 'lucide-react';

import Item from '../item';

import styles from './stylesheet';

export default function Separator() {
  return (
    <Item aria-hidden="true" className={styles.container} role="presentation">
      <MoveRight className={styles.icon} />
    </Item>
  );
}
