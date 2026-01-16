import { Ellipsis as Icon } from 'lucide-react';

import Item from '../item';

import styles from './stylesheet';

export default function Ellipsis() {
  return (
    <Item aria-hidden="true" role="presentation">
      <Icon className={styles.icon} />
    </Item>
  );
}
